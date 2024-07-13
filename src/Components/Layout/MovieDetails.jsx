import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { details, removeDetails } from '../store/actions/movieAction';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import HorizontalCards from '../partials/HorizontalCards';
import Details from '../partials/Details';

const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movieSlice);
  console.log(movie);
  useEffect(() => {
    dispatch(details(id));

    return () => dispatch(removeDetails())
  }, [id]);


  return movie.movieDetails.details ? <div className='h-full pb-5 px-20 w-full relative text-white z-0'>
    <nav className=' py-7 flex  text-lg justify-between items-center'>
      <div className='flex gap-10 items-center'>
        <i onClick={() => navigate(-1)} className="cursor-pointer ri-arrow-left-line text-xl hover:text-violet-300"></i>
        <a className='hover:text-violet-300' target='_blank' href={`${movie.movieDetails.externalIds.imdb_id ? `https://www.imdb.com/title/${movie.movieDetails.externalIds.imdb_id}` : ''} `}><h1>imdb</h1></a>
        <a className='hover:text-violet-300' target='_blank' href={`${movie.movieDetails.externalIds.wikidata_id ? `https://www.wikidata.org/wiki/${movie.movieDetails.externalIds.wikidata_id}` : ''}`}><h1><i className="ri-global-line"></i></h1></a>
      </div>
      <div className='flex gap-5 items-center'>
        <h1 className='text-violet-300 font-medium'>Social :</h1>
        <a className='hover:text-violet-300' target='_blank' href={`${movie.movieDetails.externalIds.twitter_id ? `https://x.com/${movie.movieDetails.externalIds.twitter_id}` : ''}`}><i className="ri-twitter-fill text-xl"></i></a>
        <a className='hover:text-violet-300' target='_blank' href={`${movie.movieDetails.externalIds.instagram_id ? `https://www.instagram.com/${movie.movieDetails.externalIds.instagram_id}` : ''} `}><i className="ri-instagram-line text-xl"></i></a>
        <a className='hover:text-violet-300' target='_blank' href={`${movie.movieDetails.externalIds.facebook_id ? `https://www.facebook.com/${movie.movieDetails.externalIds.facebook_id}` : ''} `}><i className="ri-facebook-fill text-xl"></i></a>
      </div>

    </nav>
    <Details Data={movie.movieDetails} />
    <h1 className='mb-5 mt-10 w-full font-semibold text-lg'>Similar:</h1>
    <HorizontalCards media_type='movie' shows={movie.movieDetails.similar} />
    <Outlet/>
  </div>
    : <div className='p-20'>
      <div className="hero h-[55vh] w-full rounded-lg bg-gray-600 animate-pulse"></div>
      <div className="hero mt-5 rounded-lg h-[15vh] w-1/2 bg-gray-600 animate-pulse"></div>
      <div className="hero mt-5 rounded-lg h-[2vh] w-full bg-gray-600 animate-pulse"></div>
      <div className="hero mt-3 rounded-lg h-[2vh] w-full bg-gray-600 animate-pulse"></div>
      <div className="hero mt-3 rounded-lg h-[2vh] w-full bg-gray-600 animate-pulse"></div>
    </div>

}

export default MovieDetails