import './style.css'
import { Dots, NewRoom, Search } from '../../../svg'
import Contact from './Contact'
export default function RightHome() {
    const color = "#65676b"
    return (
        <div className='rightHome'>
            <div className="heading">Sponsered</div>
            <div className="splitter1"></div>
            <div className="contacts_wrap">
                <div className="contacts_header">
                    <div className="contacts_header_left">Contacts</div>
                    <div className="contacts_header_right">
                        <div className="contact_circle hover2">
                            <NewRoom color={color}/>
                        </div>
                        <div className="contact_circle hover2">
                            <Search color={color}/>
                        </div>
                        <div className="contact_circle hover2">
                            <Dots color={color}/>
                        </div>
                    </div>
                </div>
                <div className='contacts_list'>
                    <Contact />
                </div>
            </div>
        </div>
    )
}
