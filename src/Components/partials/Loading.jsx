import React, { useEffect } from 'react'

const Loading = ({ trending }) => {
    useEffect(()=>{
        console.log(trending);
    },[])
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <img className='h-full w-full object-cover mix-blend-overlay' src="https://i0.wp.com/danielswanick.com/wp-content/uploads/2016/08/animated-page-load-4.gif?resize=800%2C600&ssl=1" alt="" />
        </div>
    )
}

export default Loading