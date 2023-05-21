import React, { useRef } from 'react'
import EmojiPicker from './EmojiPicker'

export default function ImagePreview({ user, text, setText, images, setImages, setShowPrev, setError }) {
    const imageInputRef = useRef(null)
    const handleImages = (e) => {
        let file = Array.from(e.target.files)
        console.log("file -->", file)
        file.forEach((img) => {
            if (img.type !== 'image/jpg' ||
                img.type !== 'image/png' ||
                img.type !== 'image/gif' ||
                img.type !== 'image/webp'
                || img.type !== 'image/jpeg'
            ){
                setError(`${img.name} format is unsupported`)
                return ;
            }else if(img.size > 1024 *1024 *5){
                setError(`${img.name} size is too large , only 5mb is allowed`)
                return;
            }
            const reader = new FileReader()
            reader.readAsDataURL(img)
            reader.onload = (readEvent) => {
                setImages((images) => [...images, readEvent.target.result])
            }
        })
    }
    return (
        <div className='overflow_a scrollbar'>
            <EmojiPicker text={text} setText={setText} user={user} type2 />
            <div className='add_pics_wrap'>
                <input
                    type='file'
                    multiple
                    hidden
                    ref={imageInputRef}
                    onChange={handleImages}
                />
                {
                    images && images.length ?
                        (
                            <div className='add_pics_inside1 p0'>
                                <div className='preview_actions'>
                                    <button className='hover1'><i className='edit_icon'></i>Edit</button>
                                    <button className='hover1' onClick={() => imageInputRef.current.click()}><i className='addPhoto_icon'></i>Add Photos/Videos</button>
                                </div>
                                <div className='small_white_circle' onClick={() => setImages([])}>
                                    <i className='exit_icon'></i>
                                </div>
                                <div className={
                                    images.length === 1 ? "preview1"
                                        : images.length === 2 ? "preview2"
                                            : images.length === 3 ? "preview3"
                                                : images.length === 4 ? "preview4"
                                                    : images.length === 5 ? "preview5"
                                                        : images.length % 2 === 0 ? "preview6"
                                                            :"preview6 singular_grid"
                                }>
                                    {images.map((image, i) => <img src={image} key={i} alt='' />)}
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className='add_pics_inside1'>
                                <div className='small_white_circle' onClick={() => setShowPrev(false)}>
                                    <i className='exit_icon'></i>
                                </div>
                                <div className='add_col' onClick={() => imageInputRef.current.click()}>
                                    <div className='add_circle'>
                                        <i className='addPhoto_icon'></i>
                                    </div>
                                    <span>Add Photos/Videos</span>
                                    <span>or drag and drop</span>
                                </div>

                            </div>
                        )
                }
                <div className='add_pics_inside2'>
                    <div className='add_circle'>
                        <i className='phone_icon'></i>
                    </div>
                    <div className='mobile_text'>Add photos from your mobile device.</div>
                    <span className='adphone_btn'>Add</span>
                </div>
            </div>
        </div>
    )
}
