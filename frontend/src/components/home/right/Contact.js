import React from 'react'
import { useSelector } from 'react-redux'
export default function Contact() {
    const { user } = useSelector((user) => ({ ...user }))
    return (
        <div className='contact hover2'>
            <div className='contact_img'>
                <img src={user.picture} alt='contact' />
            </div>
            <span>{user.firstName} {user.lastName}</span>
        </div>
    )
}
