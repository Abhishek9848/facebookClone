import React from 'react'

export default function PostError({ error , setError , setLoading}) {
    return (
        <div className='postError'>
            {error}
            <button className='blue_btn' onClick={()=> {
                setError('')
                setLoading(false)
                }}>Try again</button>
        </div>
    )
}
