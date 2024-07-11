import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadPersonDetails, removePersonDetails } from '../store/actions/personAction';
import { useNavigate, useParams } from 'react-router-dom';
import HorizontalCards from '../partials/HorizontalCards';

const PeopleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const person = useSelector(store => store.personSlice.personDetails)

  useEffect(() => {
    dispatch(LoadPersonDetails(id));
    return ()=>  dispatch(removePersonDetails());
  }, [id])
  console.log(person);

  return person.externalIds &&
    <div className='text-white px-14 w-full'>
      <nav className=' py-7 flex  text-lg justify-between items-center'>
        <div className='flex gap-10 items-center'>
          <i onClick={() => navigate(-1)} className="cursor-pointer ri-arrow-left-line text-xl hover:text-violet-300"></i>
          <a className='hover:text-violet-300' target='_blank' href={`${person.externalIds && person.externalIds.imdb_id ? `https://www.imdb.com/name/${person.externalIds.imdb_id}` : ''} `}><h1 className={`${person.externalIds && person.externalIds.imdb_id && person.externalIds.imdb_id.length === 0 ? 'hidden' : ''}`}>imdb</h1></a>
          <a className='hover:text-violet-300' target='_blank' href={`${person.externalIds && person.externalIds.wikidata_id && person.externalIds.wikidata_id.length != 0 ? `https://www.wikidata.org/wiki/${person.externalIds.wikidata_id}` : ''}`}><h1 className={`${person.externalIds && person.externalIds.wikidata_id && person.externalIds.wikidata_id.length === 0 ? 'hidden' : ''}`}><i className="ri-global-line"></i></h1></a>
        </div>
        <div className='flex gap-3 items-center'>
          <h1 className='text-violet-300 font-medium'>Social :</h1>
          <a className='hover:text-violet-300' target='_blank' href={`${person.externalIds && person.externalIds.twitter_id && person.externalIds.twitter_id.length != 0 ? `https://x.com/${person.externalIds.twitter_id}` : ''}`}><i className={`${person.externalIds && person.externalIds.twitter_id && person.externalIds.twitter_id.length === 0 ? 'hidden' : ''} ri-twitter-fill text-xl`}></i></a>
          <a className='hover:text-violet-300' target='_blank' href={`${person.externalIds && person.externalIds.instagram_id && person.externalIds.instagram_id.length != 0 ? `https://www.instagram.com/${person.externalIds.instagram_id}` : ''} `}><i className={`${person.externalIds && person.externalIds.instagram_id && person.externalIds.instagram_id.length === 0 ? 'hidden' : ''} ri-instagram-line text-xl`}></i></a>
          <a className='hover:text-violet-300' target='_blank' href={`${person.externalIds && person.externalIds.facebook_id && person.externalIds.facebook_id.length != 0 ? `https://www.facebook.com/${person.externalIds.facebook_id}` : ''} `}><i className={`${person.externalIds && person.externalIds.facebook_id && person.externalIds.facebook_id.length === 0 ? 'hidden' : ''} ri-facebook-fill text-xl`}></i></a>
        </div>
      </nav>

      <div className="flex gap-10 pt-10 mb-10">
        <div className="poster shrink-0 h-[50vh] w-[20vw] overflow-hidden rounded-lg">
          <img className='h-full hover:scale-110 transition-all duration-300 w-full object-cover' src={person.personDetail.profile_path ? `https://image.tmdb.org/t/p/original${person.personDetail.profile_path}` : 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'} alt="" />
        </div>
        <div>
          <h1 className='text-4xl font-semibold'>{person.personDetail.name} <small className='text-xs text-zinc-300'>( {person.personDetail.birthday}{person.personDetail.deathday === '' ? '- ' + person.personDetail.birthday : ''} )</small></h1>
          <h2 className='my-4 font-semibold'>{person.personDetail.known_for_department}</h2>
          <p>{person.personDetail.biography.length < 500 ? person.personDetail.biography : person.personDetail.biography.slice(0, 500) + ' ...'} {person.personDetail.biography.length > 500 && <span className='text-blue-500 text-sm cursor-pointer' onClick={(e) => e.target.parentNode.innerHTML = person.personDetail.biography}>More</span>}</p>
          <div className="flex gap-4 h-[40vh] pb-3 overflow-hidden mt-5 overflow-x-auto">
            {person.images.map((e, i) => <img key={i} className='h-full rounded object-cover' src={`https://image.tmdb.org/t/p/original${e.file_path}`} alt="" />)}
          </div>
        </div>
      </div>
      <div className='pb-10'>
      <h1 className="mb-5 text-lg font-semibold">Movies : </h1>
      <HorizontalCards shows={person.credits.cast} />
      </div>
    </div>
}

export default PeopleDetails