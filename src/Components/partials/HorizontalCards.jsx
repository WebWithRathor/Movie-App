import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCards = ({ shows,media_type }) => {
  return (
    <>
    <div className='h-48  w-full overflow-x-auto flex gap-3'>
      {shows.map((show, i) => <Link to={`/${show.media_type || media_type}/details/${show.id}`} key={i}  className={`rounded relative overflow-hidden h-full md:w-[13vw] flex items-end p-3 shrink-0 bg-gray-900 text-white`}>
        <img className='h-full hover:scale-110 transition-all duration-300 cursor-pointer absolute left-0 top-0 w-full object-cover' src={ show.backdrop_path || show.poster_path || show.profile_path ? `https://image.tmdb.org/t/p/original${show.backdrop_path || show.poster_path || show.profile_path}` : 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'} alt="" />
        <div className="overlay pointer-events-none  bg-gradient-to-b from-transparent to-[90%] to-[rgba(0,0,0,.5)] h-full w-full absolute top-0 left-0"></div>
        <h1 className='font-semibold relative p-1'>{show.name || show.original_title || show.original_name}</h1>
      </Link>)}
    </div>
    </>

  )
}

export default HorizontalCards