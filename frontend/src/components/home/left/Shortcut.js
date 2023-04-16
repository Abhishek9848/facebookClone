import React from 'react'

export default function Shortcut({ link, img, text }) {
    return (
        <a
            href={link}
            target={'_blank'}
            rel='noreferrer'
            className='shortcut_item hover2'
        >
            <img src={img} alt='' />
            <span>{text}</span>
        </a>
    )
}
