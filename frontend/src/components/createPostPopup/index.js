import { useRef, useState } from 'react'
import './styles.css'
import { useSelector } from 'react-redux'
import Picker from 'emoji-picker-react'


export default function CreatePostPopup() {
  const { user } = useSelector((user) => ({ ...user }))
  const [text, setText] = useState('')
  const textRef = useRef(null)
  const [preview, setPreview] = useState(false)
  const [picker, setPicker] = useState(true)
  const handleEmojiClick = (e,{emoji})=>{
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0 , ref.selectionStart)
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText) 
  }
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
        {!preview && <div className='flex_center'>
          <textarea
            ref={textRef}
            maxLength={'100'}
            value={text}
            className='post_input'
            placeholder={`what's on your mind , ${user.firstName}`}
            onChange={(e) => setText(e.target.value)}
          />
        </div>}
        <div className='post_emoji_wrap'>
          {picker && <div className='comment_emoji_picker rlmove'>
            <Picker onEmojiClick={handleEmojiClick}/>
          </div>}
          <img src='../../../icons/colorful.png' alt='emoji picker icon' />
          <i className='emoji_icon_large' onClick={() => setPicker((prev) => !prev)}></i>
        </div>
      </div>
    </div>
  )
}
