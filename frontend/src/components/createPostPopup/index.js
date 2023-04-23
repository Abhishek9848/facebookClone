import { useState } from 'react'
import './styles.css'
import { useSelector } from 'react-redux'

export default function CreatePostPopup() {
  const { user } = useSelector((user) => ({ ...user }))
  const [text, setText] = useState('')
  const [preview , setPreview] = useState(false)
  return (
    <div className='blur'>
      <div className='postBox'>
        <div className='box_header'>
          <div className='small_circle'>
            <i className='exit_icon'></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className='box_profile'>
          <img src={user.picture} alt='profilepic' className='box_profile_img' />
          <div className="box_col">
            <div className='box_profile_name'>
              {user.firstName} {user.lastName}
            </div>
            <div className="box_privacy">
              <img src="../../../icons/public.png" alt="public icon" />
              <span>Public</span>
              <i className='arrowDown_icon'></i>
            </div>
          </div>
        </div>
        { !preview && <div className='flex_center'>
          <textarea 
            maxLength={'100'}
            value={text}
            className='post_input'
            placeholder={`what's on your mind , ${user.firstName}`}
            onChange={(e)=> setText(e.target.value)}
          />
        </div>}
        <div className='post_emoji_wrap'>
          <div className='comment_emoji_picker rlmove'></div>
        </div>
      </div>
    </div>
  )
}
