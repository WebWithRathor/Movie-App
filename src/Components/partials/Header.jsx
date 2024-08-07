import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ wallpaper }) => {

    return (
        <div
            style={{ background: `linear-gradient(to top , rgba(0,0,0,.5),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original${wallpaper.backdrop_path || wallpaper.profile_path || wallpaper.poster_path}`, backgroundPosition: 'top 10%', backgroundSize: 'cover' }}
            className='rounded h-[50vh] mt-5 w-full text-white flex flex-col justify-end  p-10'>
            <h1 className='font-black md:text-5xl text-xl '>{wallpaper.original_title || wallpaper.name || wallpaper.original_name}</h1>
            <p className='md:w-3/4 w-full mt-5 md:text-md text-xs my-3'>{wallpaper.overview.length > 300 ? wallpaper.overview.slice(0, 300) + '...' : wallpaper.overview}</p>
            <div className="flex">
                <p className='flex md:text-md text-xs font-semibold gap-2'>
                    <i className="text-violet-400 ri-calendar-fill">
                    </i>
                    {wallpaper.first_air_date || wallpaper.release_date}
                </p>
                <p className='flex md:text-md text-xs font-semibold gap-2 ml-4'>
                    <i className="text-violet-400 ri-album-fill">
                    </i>
                    {wallpaper.media_type.toUpperCase()}
                </p>
            </div>
            <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}/trailer/${wallpaper.id}`} className='md:px-10 md:py-3 mt-5 px-3 py-1  bg-violet-500 hover:bg-zinc-200 hover:text-violet-600 transition-all rounded font-semibold w-fit'>Watch Now</Link>
        </div>
    )
}

export default Header