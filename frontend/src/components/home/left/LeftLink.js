import React from 'react'

export default function LeftLink({ img, text, notifications }) {
    return (
        <div className='left_link hover2'>
            <img src={`../../../left/${img}.png`} alt='' />
            {notifications !== undefined ? (
                <div className='col'>
                    <div className='col_1'>{text}</div>
                    <div className='col_2'>{notifications}</div>
                </div>
            ) : (
                <span>{text}</span>
            )}
        </div>
    )
}
