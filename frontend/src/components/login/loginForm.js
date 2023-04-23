import '../../pages/login/styles.css'
import { Formik, Form } from 'formik'
import { Link, Navigate } from 'react-router-dom'
import LoginInput from '../../components/login/loginInput'
import { useState } from 'react'
import { loginValidation } from '../../validations'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Cookies from 'js-cookie'
import DotLoader from 'react-spinners/DotLoader'
import Message from '../message'

export default function LoginForm({ openRegister }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [credentails, setCredentials] = useState({ username: '', password: '' })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials({ ...credentails, [name]: value })
    }
    const handleSubmit = async () => {
        try {
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, credentails);
            setLoading(false)
            setError("");
            if (!data.verified) return navigate('/not-verified')
            dispatch({ type: "LOGIN", payload: data });
            Cookies.set("user", JSON.stringify(data));
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/')
        } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
        }
    }
    return (
        <div className='login_2'>
            <div className='login_2_wrap'>
                <Formik
                    enableReinitialize
                    initialValues={credentails}
                    validationSchema={loginValidation}
                    onSubmit={handleSubmit}
                >
                    {(formik) => (
                        <Form>
                            <LoginInput
                                type="text"
                                name="username"
                                placeholder={'username or Email address'}
                                onChange={handleChange}
                                value={credentails.username}
                            />
                            <LoginInput
                                type="password"
                                name="password"
                                placeholder={'password'}
                                onChange={handleChange}
                                value={credentails.password}
                                bottom
                            />
                            <button type="submit" className='blue_btn'>Log In</button>
                            {loading && <div className='CenterLoader'>
                                <DotLoader color="#1876f2" loading={loading} size={300} />
                            </div>}
                            {error && <Message type={'error'} msg={error} />}
                        </Form>
                    )}
                </Formik>
                <Link to="/forgot" className='forgot_password'>Forgotten Password</Link>
                <div className='sign_splitter'></div>
                <button className='blue_btn open_signup' onClick={() => openRegister()}>Create Account</button>
            </div>
            <Link to={'/'} className="sign_extra"><b>Create a page</b> for a celebrity,brand or business.</Link>
        </div>
    )
}
