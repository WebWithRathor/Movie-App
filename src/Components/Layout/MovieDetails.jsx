import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { details } from '../store/actions/movieAction';
import { Link, useParams } from 'react-router-dom';
import HorizontalCards from '../partials/HorizontalCards';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movieSlice);

  console.log(movie);


  useEffect(() => {
    dispatch(details(id))
  }, []);


  return movie.movieDetails.details ? <div className='h-screen px-20 w-full relative text-white z-0'>
      <nav className=' py-7 flex gap-10 text-lg items-center'>
        <Link to='/'><i className="ri-arrow-left-line text-xl"></i> </Link>
        <h1>imdb</h1>
        <h1><i className="ri-global-line"></i></h1>
      </nav>
      <div className="flex items-center">
        <div className="w-1/2">
          <h1 className='text-4xl text-violet-300 font-semibold'>{movie.movieDetails.details.name || movie.movieDetails.details.original_title || movie.movieDetails.details.original_name}</h1>
          <div className="rating mt-4 flex gap-4 items-center">
            <div className="stars flex text-violet-300 gap-1 text-sm"><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></div>
            <h1 className={`font-semibold ${movie.movieDetails.details.vote_average === 0 ? 'hidden' : '' }`}>{movie.movieDetails.details.vote_average} <i className='ri-heart-fill text-violet-300'></i> </h1>
            <h1 className='font-semibold'>{Math.floor(movie.movieDetails.details.runtime/60) === 0 ? '' : Math.floor(movie.movieDetails.details.runtime/60) + ' hr'} {Math.floor(movie.movieDetails.details.runtime%60)} min's</h1>
          </div>
          <p className='w-[80%] my-5 tracking-wide leading-normal'>{movie.movieDetails.details.overview}</p>
          <h1 className='capitalize' ><span className='text-violet-300 font-medium mr-2'>starring :</span> hello, jello, dello</h1>
          <h1 className='capitalize my-1' ><span className='text-violet-300 font-medium mr-2'>Genre :</span> {movie.movieDetails.details.genres.map((e,i)=> <span key={i}>{e.name} {movie.movieDetails.details.genres.length -1 === i ? '' : ','} </span> )}</h1>
          <h1 className='capitalize mb-1' ><span className='text-violet-300 font-medium mr-2'>Rent :</span> hello, jello, dello</h1>
          <h1 className='capitalize mb-7' ><span className='text-violet-300 font-medium mr-2'>Buy :</span> hello, jello, dello</h1>
          <button className='px-7 py-3 bg-violet-500 text-white font-semibold rounded'>Watch Trailer <i className="ri-play-fill"></i></button>
        </div>
        <div className="right flex flex-col items-center justify-center w-1/2">
          <div className="poster w-[25vw] h-[45vh] rounded-sm overflow-hidden shadow-[3px_3px_70px_20px] shadow-violet-300/[.2] bg-green-50">
            <img className='h-full w-full object-cover' src={ movie.movieDetails.details.poster_path || movie.movieDetails.details.backdrop_path || movie.movieDetails.details.profile_path ? `https://image.tmdb.org/t/p/original${movie.movieDetails.details.backdrop_path || movie.movieDetails.details.poster_path || movie.movieDetails.details.profile_path}` : 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'} alt="" />
          </div>
          <h1 className='mt-10 mb-5 w-full font-semibold text-lg'>Similar:</h1>
          <HorizontalCards shows={movie.movieDetails.similar} />
        </div>
      </div>
    </div> : <h1>loading...............</h1>
  
}

export default MovieDetails