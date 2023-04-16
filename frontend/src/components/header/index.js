import './styles.css'
import { Link } from 'react-router-dom'
import { ArrowDown, Friends, Gaming, HomeActive, Market, Menu, Messenger, Notifications, Search, Watch } from '../../svg'
import { useSelector } from 'react-redux'
import SearchMenu from './searchMenu'
import { useRef, useState } from 'react'
import AllMenu from './AllMenu'
import useClickOutside from '../../helpers/clickOutside'
import UserMenu from './userMenu'

export default function Header() {
    const color = "#65676b"
    const allMenu = useRef(null)
    const userMenu = useRef(null)
    useClickOutside(allMenu, () => {
        setShowAllMenu(false)
    })
    useClickOutside(userMenu, () => {
        setShowUserMenu(false)
    })
    let { user } = useSelector(user => { return { ...user } })
    user = user ? user : JSON.parse(localStorage.getItem('user'))
    const [showSearch, setShowSearch] = useState(false)
    const [showAllManu, setShowAllMenu] = useState(false)
    const [showUserMenu, setShowUserMenu] = useState(null)
    console.log("showUserMenu ==>>", showUserMenu)
    return (
        <header>
            <div className="header_left">
                <Link to="/" className='header_logo' >
                    <div className='circle'>
                        {process.env.REACT_APP_TITLE}
                    </div>
                </Link>
                <div className='search search1' onClick={() => setShowSearch(true)}>
                    <Search color={color} />
                    <input type='text' placeholder='Search social Media' className='hide_input ' />
                </div>
            </div>
            {showSearch && <SearchMenu color={color} setShowSearch={setShowSearch} />}
            <div className="header_middle">
                <Link to="/" className='middle_icon hover1 active'><HomeActive color={color} /></Link>
                <Link to="/" className='middle_icon hover1'><Friends color={color} /></Link>
                <Link to="/" className='middle_icon hover1'>
                    <Watch color={color} />
                    <div className='middle_icon_notification'>9+</div>
                </Link>
                <Link to="/" className='middle_icon hover1'><Market color={color} /></Link>
                <Link to="/" className='middle_icon hover1'><Gaming color={color} /></Link>
            </div>
            <div className="header_right">
                <Link to={'/profile'} className='profile_link hover1'>
                    <img src={user?.picture} alt='profile_image' />
                    <span>{user?.firstName}</span>
                </Link>
                <div className='circle_icon hover1' ref={allMenu} >
                    <div onClick={() => setShowAllMenu((prev) => !prev)}>
                        <div style={{ transform: "translateY(2px)" }}>
                            <Menu color={`${showAllManu ? '#1b74e4' : color}`} />
                        </div>
                    </div>
                    {showAllManu && <AllMenu />}
                </div>
                <Link to="/" className='circle_icon hover1'><Messenger color={color} /></Link>
                <Link to="/" className='circle_icon hover1'>
                    <Notifications color={color} />
                    <div className='right_notification'>5</div>
                </Link>
                <div className="circle_icon hover1" ref={userMenu}>
                    <div onClick={() => { setShowUserMenu((prev) => !prev) }} >
                        <div style={{ transform: "translateY(2px)" }}>
                            <ArrowDown color={`${showUserMenu ? '#1b74e4' : color}`} />
                        </div>
                    </div>
                    {showUserMenu && <UserMenu user={user} />}
                </div>
            </div>
        </header>
    )
}
