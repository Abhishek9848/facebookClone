import './style.css'
import { Feeling, LiveVideo, Photo } from '../../svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CreatePostPopup from '../createPostPopup'

export default function CreatePost() {
    const { user } = useSelector((user) => ({ ...user }))
    const [visible, setVisible] = useState(false)
    return (
        <div className='create_post'>
            <div className='create_post_header'>
                <img src={user.picture} alt='' />
                <div className='open_post hover2' onClick={() => setVisible((prev) => !prev)}>What's on your mind</div>
            </div>
            <div className='create_splitter'></div>
            <div className='createPost_body'>
                <div className='create_post_icon hover1'>
                    <LiveVideo color={"#f3425f"} />Live Video
                </div>
                <div className='create_post_icon hover1'>
                    <Photo color={"#4bbf67"} />Photo/ Video
                </div>
                <div className='create_post_icon hover1'>
                    <Feeling color={"#f7b928"} />Feeling/Activity
                </div>
            </div>
            {
                visible && <CreatePostPopup />
            }
        </div>
    )
}
