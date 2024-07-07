import React from 'react'

const Cards = ({ media }) => {
    return (
        <div className="flex flex-wrap justify-evenly gap-y-8 py-10">
            {media.map((show, i) => <div className='w-[22vw] h-[40vh] bg-gradient-to-tr from-gray-800 to-gray-950 rounded-lg overflow-hidden' key={i}>
                <img className='h-[85%] w-full object-cover' src={show.backdrop_path || show.poster_path || show.profile_path ? `https://image.tmdb.org/t/p/original${show.backdrop_path || show.poster_path || show.profile_path}` : 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'} alt="" />
                <h1 className='px-2 py-2 text-white font-semibold'>{(show.name || show.original_title || show.original_name).length >35 ?(show.name || show.original_title || show.original_name).slice(0,35) + '..' : (show.name || show.original_title || show.original_name)}</h1>
            </div>)}
        </div>
    )
}

export default Cards