import Picker from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react';

export default function EmojiPicker({ user, text, setText, type2, setBackground, background }) {
    const [picker, setPicker] = useState(false);
    const textRef = useRef(null);
    const bgRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState();
    const [showbackground, setShowBackground] = useState(true)
    const handleEmoji = (emoji) => {
        const ref = textRef.current;
        ref.focus();
        const start = text.substring(0, ref.selectionStart);
        const end = text.substring(ref.selectionStart);
        const newText = start + emoji + end;
        setText(newText);
        setCursorPosition(start.length + emoji.length);
    };
    const postBackground = [
        "../../../images/postBackgrounds/1.jpg",
        "../../../images/postBackgrounds/2.jpg",
        "../../../images/postBackgrounds/3.jpg",
        "../../../images/postBackgrounds/4.jpg",
        "../../../images/postBackgrounds/5.jpg",
        "../../../images/postBackgrounds/6.jpg",
        "../../../images/postBackgrounds/8.jpg",
        "../../../images/postBackgrounds/9.jpg",
        "../../../images/postBackgrounds/10.jpg",
    ]
    useEffect(() => {
        textRef.current.selectionEnd = cursorPosition;
    }, [cursorPosition]);
    const backgroundHandler = (i) => {
        bgRef.current.style.backgroundImage = `url(${postBackground[i]})`
        setBackground(postBackground[i])
        bgRef.current.classList.add('bgHandler')
    }
    const removeBackground = (i) => {
        bgRef.current.style.backgroundImage = ``
        setBackground("")
        bgRef.current.classList.remove('bgHandler')
    }
    return (
        <div className={type2 ? "images_input" : ""} >
            <div className={!type2 ? "flex_center" : ""} ref={bgRef}>
                <textarea
                    ref={textRef}
                    maxLength="250"
                    value={text}
                    placeholder={`What's on your mind, ${user.firstName}`}
                    className={`post_input ${type2 ? "input2" : ""}`}
                    onChange={(e) => setText(e.target.value)}
                    style={{paddingTop:`${
                        background && showbackground ?
                        Math.abs(textRef.current.value.length*0.1-35):"0"
                    }%`}}
                ></textarea>
            </div>
            <div className={!type2 ? "post_emoji_wrap" : ""}>
                {picker && (
                    <div className={`comment_emoji_picker ${type2 ? "movepicker2" : "rlmove"}`}>
                        <Picker onEmojiClick={(e) => handleEmoji(e.emoji)} />
                    </div>
                )}
                {!type2 && <img src="../../../icons/colorful.png" alt="" onClick={() => setShowBackground((prev) => !prev)} />}
                {!type2 && showbackground &&
                    (<div className='post_background'>
                    <div className='no_bg' onClick={() => removeBackground()}></div>
                        {postBackground.map((bg, i) =>
                            <img src={bg} key={i} alt="" onClick={() => backgroundHandler(i)} />)
                        }
                    </div>)
                }
                <i
                    className={`emoji_icon_large ${type2 ? "moveleft" : ""}`}
                    onClick={() => {
                        setPicker((prev) => !prev);
                    }}
                ></i>
            </div>
        </div >
    )
}
