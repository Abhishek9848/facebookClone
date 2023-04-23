import './style.css'

export default function Message({type , msg}) {
    const color = type === "error" ? "rgba(255, 0, 0, 0.5)" : "rgba(0, 128, 0, 0.4)"
    const icon = type === "error" ? "error_icon" : "tick_icon"
  return (
    <div className='message' style={{background:color}}>
          <i className={icon}></i>
          <span>{msg}</span>
    </div>
  )
}
