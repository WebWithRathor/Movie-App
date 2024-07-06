import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCards = ({ shows }) => {
  return (
    <div className='h-[30vh] mt-7 w-full overflow-x-auto flex gap-3'>
      {shows.map((show, i) =>    <div key={i} style={{ background: `linear-gradient(to top , rgba(0,0,0,.5),rgba(0,0,0,.4),rgba(0,0,0,.3)), url(https://image.tmdb.org/t/p/original${show.backdrop_path || show.profile_path || show.poster_path}`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        className='rounded h-full w-[15vw] shrink-0 p-5 text-white flex flex-col justify-end'>
        <h1 className='font-semibold '>{show.original_title || show.name || show.original_name}</h1>
      </div>)}
    </div>
  )
}

export default HorizontalCards