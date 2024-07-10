import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ media }) => {
    return (
        <div className="flex flex-wrap justify-evenly gap-y-8 py-10">
            {media.map((show, i) => <Link to={`/${show.media_type}/details/${show.id}`} className='w-[22vw] relative h-[40vh] bg-gradient-to-tr from-gray-800 to-gray-950 rounded-lg' key={i}>
                <img className='h-[85%] w-full rounded-t-lg object-cover' src={show.backdrop_path || show.poster_path || show.profile_path ? `https://image.tmdb.org/t/p/original${show.backdrop_path || show.poster_path || show.profile_path}` : 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'} alt="" />
                <h1 className='px-2 py-2 text-white font-semibold'>{(show.name || show.original_title || show.original_name).length >35 ?(show.name || show.original_title || show.original_name).slice(0,35) + '..' : (show.name || show.original_title || show.original_name)}</h1>
                {show.vote_average && show.vote_average != 0 ? <div className="banner absolute bottom-[10%] right-0 translate-x-1/3 h-12 aspect-square bg-violet-200 text-violet-600 flex items-center justify-center font-semibold rounded-full pl-1.5">{(show.vote_average*10).toFixed()}%</div>:''}
            </Link>)}
        </div>
    )
}

export default Cards