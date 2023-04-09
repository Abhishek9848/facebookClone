import Header from '../../components/header'
import './styles.css'

export default function Home() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log("user-->", user.firstName)
    return (
        <div>
        <Header />
            Hii , {user.firstName}
        </div>
    )
}