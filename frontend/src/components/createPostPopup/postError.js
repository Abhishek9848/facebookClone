import React from 'react'

export default function PostError({ error , setError , setLoading}) {
    return (
        <div className='postError'>
            <div className='posterror_error_text'>{error}</div>
            <button className='blue_btn' onClick={()=> {
                setError('')
                setLoading(false)
                }}>Try again</button>
        </div>
    )
}
