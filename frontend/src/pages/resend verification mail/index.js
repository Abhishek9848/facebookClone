import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
import axios from 'axios'
import DotLoader from 'react-spinners/DotLoader'
import Message from '../../components/message'

export default function ResendVerificationMail() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState('')
    const handleClick = async () => {
        try {
            setLoading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/resend-activation-link`, { username });
            setLoading(false)
            setSuccess(data.message)
            setTimeout(() => {
                if (data.success) return navigate('/login')
            }, 3000)
        } catch (err) {
            setLoading(false)
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
            <div className='resend'>
                <div className='resend_header'>
                    <p>Resend Activation Link</p>
                </div>
                <div className='resend_splitter'></div>
                <div className='resend_body'>
                    <p>Please enter your email address or Username to resend activation confirmation link.</p>
                    <input type='text' placeholder={'Username or Email'} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='resend_splitter'></div>
                <div className='resend_footer'>
                    <button onClick={() => navigate('/login')} className='cancelButton'>Cancel</button>
                    <button type='submit' onClick={handleClick} disabled={username === '' ? true : false}>Send</button>
                </div>
                {error && <Message type={'error'} msg={error} />}
                {success && <Message type={'success'} msg={success} />}
            </div>
            {loading && <div className='CenterLoader'>
                <DotLoader color="#1876f2" loading={loading} size={300} />
            </div>}

        </div>
    )
}
