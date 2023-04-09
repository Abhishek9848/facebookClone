import { useEffect, useRef, useState } from 'react'
import { Return, Search } from '../../svg'
import useClickOutside from '../../helpers/clickOutside'

export default function SearchMenu({ color  , setShowSearch}) {
    const [seachIconVisible , setSearchIconVisible] = useState(true)
    const menu = useRef(null)
    const input = useRef(null)
    useClickOutside(menu , ()=>{
        setShowSearch(false)
    })
    useEffect(()=>{
        input.current.focus()
    })
    return (
        <div className='header_left search_area scrollbar' ref={menu}>
            <div className='search_wrap'>
                <div className='return_arrow'>
                    <div className='circle hover1' onClick={()=> setShowSearch(false)}>
                        <Return  color={color}/>
                    </div>
                </div>
                <div className='search' onClick={()=> input.current.focus()}>
                    <div>
                        {seachIconVisible && <Search color={color} />}
                    </div>
                    <input type='text' placeholder='Search social Media' ref={input} onFocus={()=> setSearchIconVisible(false)} onBlur={()=> setSearchIconVisible(true)}/>
                </div>
            </div>
            <div className='search_history_header'>
                <span>Recent searches</span>
                <a>Edit</a>
            </div>
            <div className='search_history'></div>
            <div className='search_results scrollbar'></div>
        </div>
    )
}
