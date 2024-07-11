import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({Data}) => {
  console.log(Data);
  return (
    <>
    <h1 style={{ backgroundClip: 'text' }} className=' bg-gradient-to-b mt-3 from-[#745cd3] via-[#c4b5fd] to-white text-xl mb-3 uppercase tracking-[5px]  font-black text-transparent  text-center'>{Data.details ? Data.details.tagline : ''}</h1>
      <div className="poster relative  h-[50vh] w-full rounded overflow-hidden shadow-[3px_3px_70px_20px] shadow-violet-300/[.2] bg-green-50">
        <img className='h-full w-full object-cover' src={Data.details.poster_path || Data.details.backdrop_path || Data.details.profile_path ? `https://image.tmdb.org/t/p/original${Data.details.backdrop_path || Data.details.poster_path || Data.details.profile_path}` : 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'} alt="" />
      </div>
      <h1 className='text-4xl mt-10 text-violet-300 font-semibold'>{Data.details.name || Data.details.original_title || Data.details.original_name}</h1>
      <div className="rating mt-4 flex gap-4 items-center">
        <h1 className={`font-semibold ${Data.details.vote_average === 0 ? 'hidden' : ''}`}><i className='ri-heart-fill text-violet-300'></i> {(Data.details.vote_average).toFixed(1)}</h1>
        <h1 className='font-semibold'> <i className="ri-time-line text-violet-300 font-normal"></i> {Data.details.runtime && Math.floor(Data.details.runtime / 60) === 0 ? '' : Math.floor(Data.details.runtime / 60) + ' hr'} {Data.details.runtime && Math.floor(Data.details.runtime % 60)} min's</h1>
      </div>
      <p className=' my-5 tracking-wide leading-normal'>{Data.details.overview}</p>

      <div className="w-full">
        <h1 className='text-violet-300 font-medium mr-2'>Starring :</h1>
        <div className="flex mt-5 overflow-x-auto w-full gap-4 mb-5 pb-5">
          {Data.casts.map((e, i) => <Link to={`/person/details/${e.id}`} key={i} className="shrink-0 overflow-hidden ">
            <img className='h-32 aspect-square rounded-full object-cover' src={e.profile_path ? `https://image.tmdb.org/t/p/original${e.profile_path}` : 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'} alt="" />
            <h1 className='text-center mt-1'>{e.name || e.original_name}</h1>
          </Link>
          )}
        </div>
      </div>



      <h1 className='capitalize my-1' ><span className='text-violet-300 font-medium mr-2'>Genre :</span> {Data.details.genres.map((e, i) => <span key={i}>{e.name} {Data.details.genres.length - 1 === i ? '' : ' , '}</span>)}</h1>
      {Data.provider && <>
       <h1 className={`capitalize flex items-center ${!Data.provider.rent ? 'hidden' : 'mt-5'}`}  ><span className='text-violet-300 font-medium mr-2'>Rent :</span>{Data.provider.rent && Data.provider.rent.map((e, i) => <span key={i}><img className={`h-10 rounded object-contain ${Data.provider.rent.length - 1 === i ? '' : 'mr-3'}`} src={`https://image.tmdb.org/t/p/original${e.logo_path}`} alt="" /></span>)}</h1> 
       <h1 className={`capitalize flex items-center ${!Data.provider.buy ? 'hidden' : 'mt-5'}`} ><span className='text-violet-300 font-medium mr-2'>Buy :</span> {Data.provider.buy && Data.provider.buy.map((e, i) => <span key={i}><img className={`h-10 rounded object-contain ${Data.provider.buy.length - 1 === i ? '' : 'mr-3'}`} src={`https://image.tmdb.org/t/p/original${e.logo_path}`} alt="" /></span>)} </h1>
      </>
       }
      <Link to='trailer/1'><button className='px-7 mt-7 py-3 bg-violet-500 text-white font-semibold rounded'>Watch Trailer <i className="ri-play-fill"></i></button></Link>
      
    </>
  )
}

export default Details