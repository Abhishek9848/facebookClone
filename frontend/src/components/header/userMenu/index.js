import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingAndPrivacy from './SettingAndPrivacy'
import HealthSupport from './healthSupport'
import DisplayAccessibility from './DisplayAccessibility'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

export default function UserMenu({ user }) {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(0)
    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"})
        Cookies.remove('user')
        localStorage.removeItem('user')
    }
    return (
        <div className='mmenu'>
            {visible === 0 &&
                <div>
                    <Link to={'/profile'} className='mmenu_header hover3'>
                        <img src={user?.picture} alt='' />
                        <div className='mmenu_col'>
                            <span>
                                {user?.firstName}{user?.lastName}
                            </span>
                            <span>See your profile</span>
                        </div>
                    </Link>
                    <div className='mmenu_splitter'></div>
                    <div className='mmenu_main hover3'>
                        <div className='small_circle'>
                            <i className='report_filled_icon'></i>
                        </div>
                        <div className='mmenu_col'>
                            <div className='mmenu_span1'>Give feedback</div>
                            <div className='mmenu_span2'>Help us improve Social Media</div>
                        </div>
                    </div>
                    <div className='mmenu_splitter'></div>
                    <div className='mmenu_item hover3' onClick={() => {setVisible(1)}}>
                        <div className='small_circle'>
                            <i className='settings_filled_icon'></i>
                        </div>
                        <span>Settings & privacy</span>
                        <div className='rArrow' >
                            <i className='right_icon'></i>
                        </div>
                    </div>
                    <div className='mmenu_item hover3' onClick={()=> setVisible(2)}>
                        <div className='small_circle'>
                            <i className='help_filled_icon'></i>
                        </div>
                        <span>Help & Support</span>
                        <div className='rArrow'>
                            <i className='right_icon'></i>
                        </div>
                    </div>
                    <div className='mmenu_item hover3' onClick={() => setVisible(3)}>
                        <div className='small_circle'>
                            <i className='dark_filled_icon'></i>
                        </div>
                        <span>Display & Accessibility</span>
                        <div className='rArrow'>
                            <i className='right_icon'></i>
                        </div>
                    </div>
                    <div className='mmenu_item hover3' onClick={handleLogout}>
                        <div className='small_circle'>
                            <i className='logout_filled_icon'></i>
                        </div>
                        <span>Logout</span>
                    </div>
                </div>
            }
            {visible === 1 && <SettingAndPrivacy setVisible={setVisible}/>}
            {visible === 2 && <HealthSupport setVisible={setVisible}/>}
            {visible === 3 && <DisplayAccessibility setVisible={setVisible}/>}
        </div>
    )
}
