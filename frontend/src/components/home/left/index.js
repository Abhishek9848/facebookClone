import LeftLink from './LeftLink'
import './style.css'
import { left } from '../../../data/home'
import { Link } from 'react-router-dom'
import { ArrowDown1 } from '../../../svg'
import { useState } from 'react'
import Shortcut from './Shortcut'

export default function LeftHome({ user }) {
    const [visible, setVisible] = useState(false)
    const year = new Date().getFullYear()
    return (
        <div className='leftHome scrollbar'>
            <Link to={'/profile'} className='left_link hover2'>
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
            {!visible && <div className='left_link hover2' onClick={() => setVisible(true)}>
                <div className='small_circle' >
                    <ArrowDown1 />
                </div>
                <span>See More</span>
            </div>}
            {visible &&
                <>
                    <div className='more_left'>
                        {left.slice(8, left.length).map((d, i) =>
                            <LeftLink
                                key={i}
                                img={d.img}
                                text={d.text}
                                notifications={d.notification}
                            />)}
                    </div>
                    <div className='left_link hover1 degree360' onClick={() => setVisible(false)}>
                        <div className='small_circle'>
                            <ArrowDown1 />
                        </div>
                        <span>See Less</span>
                    </div>
                </>}
            <div className='splitter'></div>
            <div className='shortcut'>
                <div className='heading'>Your Shortcuts</div>
                <div className='edit_shortcut'>Edit</div>
            </div>
            <div className='shortcut_list'>
                <Shortcut
                    link={'https://www.youtube.com/channel/UCcfdqLTkfuzN6Jt_e1BLPAA'}
                    img={'../../images/ytb.png'}
                    text={"My Youtube Channel"}
                />
                <Shortcut
                    link={'https://www.youtube.com/channel/UCcfdqLTkfuzN6Jt_e1BLPAA'}
                    img={'../../images/insta.png'}
                    text={"My Instagram"}
                />
            </div>
            <div className={!visible ? 'socialMedia_copyright' : "relative_copyright"}>
                <Link to={'/'}>Privacy</Link><span>. </span>
                <Link to={'/'}>Terms</Link><span>. </span>
                <Link to={'/'}>Advertising</Link><span>. </span>
                <Link to={'/'}>Ad choices <i className='ad_choices_icon'></i>{" "}</Link><span>. </span>
                <Link to={'/'}></Link>Cookies<span>. </span>
                <Link to={'/'}>More</Link><span>. </span><br />
                Social Media @ {year}
            </div>
        </div>
    )
}
