import { Link } from 'react-router-dom'
import './style.css'

export default function index() {
  return (
    <div className='wrapper'>
          <header>
              <div className="header_left">
                  <Link to="/" className='header_logo' >
                      <div className='circle'>
                          {process.env.REACT_APP_TITLE}
                      </div>
                  </Link>
              </div>
          </header>
    </div>
  )
}
