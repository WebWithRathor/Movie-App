import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';

const Trailer = () => {
    const {pathname} = useLocation();
    const category = pathname.includes('movie') ? 'movie' : 'tv'
    const navigate = useNavigate();
    const key = useSelector(state => state[category + 'Slice'][category + 'Details'].video.key);
  return (
    <div className='h-screen w-screen bg-black/[.7] flex items-center justify-center fixed top-0 left-0 z-[9999]'>
        <Link onClick={()=>navigate(-1)}><i  className="cursor-pointer ri-close-circle-fill text-white text-2xl absolute top-6 right-10"></i></Link>
        <ReactPlayer width={'80%'} height={'70%'} url={`https://www.youtube.com/watch?v=${key}`} />
    </div>
  )
}

export default Trailer