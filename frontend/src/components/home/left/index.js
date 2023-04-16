import LeftLink from './LeftLink'
import './style.css'
import {left} from '../../../data/home'
import { Link } from 'react-router-dom'
import {ArrowDown1 } from '../../../svg'

export default function LeftHome({ user }) {
    return (
        <div className='leftHome'>
            <Link to={'/profile'} className='left_link hover1'>
                <img src={user?.picture} alt='' />
                <span>{user?.firstName} {user?.lastName}</span>
            </Link>
            {left.slice(0, 8).map((d, i) =>
                <LeftLink
                    key={i}
                    img={d.img}
                    text={d.text}
                    notifications={d.notification}
                />)}
            <div className='left_link hover1'>
                <div className='small_circle'>
                    <ArrowDown1 />
                </div>
                <span>See More</span>
            </div>
            <div className='more_left'>
                {left.slice(8,left.length).map((d, i) =>
                    <LeftLink
                        key={i}
                        img={d.img}
                        text={d.text}
                        notifications={d.notification}
                    />)}
            </div>
        </div>
    )
}
