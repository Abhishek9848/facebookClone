import './styles.css'
import LoginForm from '../../components/login/loginForm'
import Footer from '../../components/login/footer'
import Register from '../../components/register/register'
import { useState } from 'react'

export default function Login() {
    const appName = process.env.REACT_APP_TITLE 
    const [open , setOpen] = useState(false)
    const handleOnClose = ()=>{
        setOpen(false)
    }
    const handleOpen = ()=>{
        setOpen(true)
    }
    return (
        <div className='login'>
            <div className='login_container'>
                <div className='login_wrap'>
                    <div className='login_1'>
                        <p className = 'app_logo'>{process.env.REACT_APP_TITLE}</p>
                        <span>{appName} helps you connect and  share with the people in your life</span>
                    </div>
                    <LoginForm openRegister={handleOpen} /> 
                </div>
                {open && <Register  close = {handleOnClose}/>}
               <Footer />
            </div>
        </div>
    )
}