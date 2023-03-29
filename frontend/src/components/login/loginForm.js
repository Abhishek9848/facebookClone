import '../../pages/login/styles.css'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import LoginInput from '../../components/login/loginInput'
import { useState } from 'react'
import { loginValidation } from '../../validations'


export default function LoginForm({ openRegister }) {
    const [credentails, setCredentials] = useState({ username: '', password: '' })
    const [open , setOpen] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials({ ...credentails, [name]: value })
    }
    console.log("credentails --->>", credentails)
    return (
        <div className='login_2'>
            <div className='login_2_wrap'>
                <Formik
                    enableReinitialize
                    initialValues={credentails}
                    validationSchema={loginValidation}
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
                        </Form>
                    )}
                </Formik>
                <Link to="/forgot" className='forgot_password'>Forgotten Password</Link>
                <div className='sign_splitter'></div>
                <button type="submit" className='blue_btn open_signup' onClick={() => openRegister()}>Create Account</button>
            </div>
            <Link to={'/'} className="sign_extra"><b>Create a page</b> for a celebrity,brand or business.</Link>
        </div>
    )
}
