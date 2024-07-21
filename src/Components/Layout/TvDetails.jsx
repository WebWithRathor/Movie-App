import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { LoadTvDetails, removeTvDetails} from '../store/actions/tvAction';
import Details from '../partials/Details';
import HorizontalCards from '../partials/HorizontalCards';

const TvDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const tv = useSelector(store => store.tvSlice.tvDetails);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(LoadTvDetails(id))
    return ()=> dispatch(removeTvDetails())
  },[])


  return ( tv.details  ? <div className='h-full pb-5 md:px-20 px-5 w-full relative text-white z-0'>
  <nav className=' py-7 flex md:flex-row flex-col gap-5 items-start  text-lg justify-between md:items-center'>
    <div className='flex gap-10 items-center'>
      <i onClick={() => navigate(-1)} className="cursor-pointer ri-arrow-left-line text-xl hover:text-violet-300"></i>
      <a className='hover:text-violet-300' target='_blank' href={`${tv.externalIds.imdb_id ? `https://www.imdb.com/title/${tv.externalIds.imdb_id}` : ''} `}><h1>imdb</h1></a>
      <a className='hover:text-violet-300' target='_blank' href={`${tv.externalIds.wikidata_id ? `https://www.wikidata.org/wiki/${tv.externalIds.wikidata_id}` : ''}`}><h1><i className="ri-global-line"></i></h1></a>
    </div>
    <div className='flex gap-5 items-center'>
      <h1 className='text-violet-300 font-medium'>Social :</h1>
      <a className='hover:text-violet-300' target='_blank' href={`${tv.externalIds.twitter_id ? `https://x.com/${tv.externalIds.twitter_id}` : ''}`}><i className="ri-twitter-fill text-xl"></i></a>
      <a className='hover:text-violet-300' target='_blank' href={`${tv.externalIds.instagram_id ? `https://www.instagram.com/${tv.externalIds.instagram_id}` : ''} `}><i className="ri-instagram-line text-xl"></i></a>
      <a className='hover:text-violet-300' target='_blank' href={`${tv.externalIds.facebook_id ? `https://www.facebook.com/${tv.externalIds.facebook_id}` : ''} `}><i className="ri-facebook-fill text-xl"></i></a>
    </div>
  </nav>
  <Details Data={tv} />
  {tv.similar.length != 0 && <><h1 className='mb-5 mt-10 w-full font-semibold text-lg'>Similar:</h1>
    <HorizontalCards media_type='movie' shows={tv.similar} /></> }
  <Outlet/>
</div>
  : <div className='p-10 md:p-20'>
    <div className="hero h-[55vh] w-full rounded-lg bg-gray-600 animate-pulse"></div>
    <div className="hero mt-5 rounded-lg h-[15vh] w-1/2 bg-gray-600 animate-pulse"></div>
    <div className="hero mt-5 rounded-lg h-[2vh] w-full bg-gray-600 animate-pulse"></div>
    <div className="hero mt-3 rounded-lg h-[2vh] w-full bg-gray-600 animate-pulse"></div>
    <div className="hero mt-3 rounded-lg h-[2vh] w-full bg-gray-600 animate-pulse"></div>
  </div>

)}

export default TvDetails