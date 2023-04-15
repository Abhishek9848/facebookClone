import { useEffect, useState } from 'react'
import Header from '../../components/header'
import './styles.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    console.log("user -->>" , user)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user) {
            navigate('login')
        }
        setUser(user)
    }, [])
    return (
        <div>
            <Header />
            Hii , {user?.firstName}
        </div>
    )
}