import { Link, useNavigate, useParams } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
import axios from 'axios'
import DotLoader from 'react-spinners/DotLoader'
import Message from '../../components/message'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'

export default function ActivateAccount() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const token = params.token
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState('')
    const handleClick = async () => {
        try {
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/activate`, { token });
            setLoading(false)
            setError('')
            setSuccess(data.message)
            setTimeout(() => {
                if (data.success) return navigate('/login')
            }, 1000)
        } catch (err) {
            setLoading(false)
            setSuccess('')
            setError(err.response.data.message)
        }

    }
    return (
        <div className='wrapper'>
            <header>
                <div className="header_left">
                    <Link to="/" className='header_logo' >
                        <div className='circle'>
                            {process.env.REACT_APP_TITLE}
                        </div>
                    </Link>
                </div>
            </header>
            <div className='activate_account'>
                <h1>Confirm your Mail to activate your account</h1>
                <button type='submit' onClick={handleClick}>Confirm your Account</button>
                {error === "jwt expired" && <button onClick={() => navigate('/resend-activation-link')}>Resend Activation Link</button>}
                {error && <Message type={'error'} msg={error} />}
                {success && <Message type={'success'} msg={success} />}
            </div>
            {loading && <div className='CenterLoader'>
                <DotLoader color="#1876f2" loading={loading} size={300} />
            </div>}
        </div>
    )
}
