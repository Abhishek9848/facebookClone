import "./styles.css";
import { useSelector } from "react-redux";
import EmojiPicker from "./EmojiPicker";
import AddToYourPost from "./AddToYourPost";
import ImagePreview from "./ImagePreview";
import { useRef, useState } from "react";
import useClickOutside from "../../helpers/clickOutside";
import { createPost } from "../../functions/createPostRequest";
import PulseLoader from "react-spinners/PulseLoader";
import PostError from "./postError";
import dataUriToBlob from "../../helpers/dataUriToBlob";
import {uploadImage} from "../../functions/uploadImage";

export default function CreatePostPopup({ setVisible }) {
  const { user } = useSelector((user) => ({ ...user }))
  const popup = useRef(null)
  const [showPrev, setShowPrev] = useState(false);
  const [images, setImages] = useState([])
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [background, setBackground] = useState("");
  useClickOutside(popup, () => {
    setVisible(false)
  })
  console.log("user -->>", user)
  const handleSubmit = async () => {
    if (background) {
      setLoading(true)
      const res = await createPost(null, background, text, null, user.id, user.token)
      if (res !== 'ok') { setError(res) }
      else {
        setLoading(false)
        reset()
        setVisible(false)
      }
    }else if(images && images.length){
    setLoading(true)
    const postImages = images.map((img)=>{
      return dataUriToBlob(img)
    })
    const path = `${user.username}/post Images `
    let formData = new FormData()
    formData.append("path" , path)
    postImages.forEach((data)=>{
      formData.append('file', data)
    })
    console.log("post 0--->>" , postImages)
    console.log("post 1--->>" , images)
    const res = await uploadImage(formData, user.token)
    console.log("resp")
    console.log("response -->>" , res)
    setLoading(false)
    // if (res !== 'ok') { setError(res) }
    // else {
    //   setLoading(false)
    //   reset()
    //   setVisible(false)
    // }
  }else if(text){
    setLoading(true)
    const res = await createPost(null, null, text, null, user.id, user.token)
    if (res !== 'ok') { setError(res) }
    else {
      setLoading(false)
      reset()
      setVisible(false)
    }
  }else{
    alert("Nothing to post!")
  }
}
  const reset = () => {
    setBackground("")
    setText("")
    setImages([])
  }
  return (
    <div className="blur" >
      <div className="postBox" ref={popup}>
        {
          error && <PostError error={error} setError={setError} setLoading={setLoading} />
        }
        <div className="box_header">
          <div className="small_circle" onClick={() => setVisible(false)}>
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img src={user.picture} alt="" className="box_profile_img" />
          <div className="box_col">
            <div className="box_profile_name">
              {user.firstName} {user.lastName}
            </div>
            <div className="box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span>Public</span>
              <i className="arrowDown_icon"></i>
            </div>
          </div>
        </div>

        {!showPrev ?
          <EmojiPicker
            user={user}
            text={text}
            setText={setText}
            setBackground={setBackground}
            background={background}
          />
          :
          <ImagePreview
            user={user}
            text={text}
            setText={setText}
            showPrev={showPrev}
            images={images}
            setImages={setImages}
            setShowPrev={setShowPrev}
          />
        }
        <AddToYourPost setShowPrev={setShowPrev} />
        <button type="submit" className="post_submit" onClick={() => handleSubmit()} disabled={loading}>
          {loading ?
            <PulseLoader color="#fff" loading={loading} size={9} />
            : "Post"}
        </button>
      </div>
    </div>
  );
}
