import { Link, useNavigate } from 'react-router-dom'
import './style.css'

export default function NotVerified() {
    const navigate = useNavigate()
    return (<div className='wrapper'>
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
                <p>Account not Verified!</p>
            </div>
            <div className='resend_splitter'></div>
            <div className='resend_body'>
                <p>
                    Oh no, Looks like your account is not activated yet , please check your mail for the acitivation link.
                    If not sent, try resend activation link
                </p>

            </div>
            <div className='resend_splitter'></div>
            <div className='resend_footer'>
                <button onClick={() => navigate('/login')} className='cancelButton'>Go Back To Login</button>
                <button onClick={() => navigate('/resend-activation-link')} >Resend Activation Link</button>
            </div>
        </div>
    </div>
    )
}
