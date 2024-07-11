import React, { useEffect, useState } from 'react'
import FilterTrending from '../partials/FilterTrending';
import { Link } from 'react-router-dom';
import Topnav from '../partials/Topnav';
import InfiniteScroll from '../partials/InfiniteScroll';
import instance from '../utils/axios';

const PeopleLayout = () => {

    const [media, setMedia] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    const getPerson =async ()=>{
        try {
            const { data } = await instance.get(`/person/popular?page=${page}`)
            if(data.results.length > 0) {
              setMedia((prev) => [...prev, ...data.results])
              setpage(page + 1);
            }else{
              sethasMore(false);
            }
          } catch (error) {
            console.log(error.message);
          }
    }

    const refreshMedia = () => {
        if (media.length === 0) {
          getPerson()
        } else {
          setpage(1)
          setMedia([])
          getPerson()
        }
      }


    useEffect(()=>{
        refreshMedia()
    },[])

  return (
    <div className='h-full w-full'>
      <div className="flex px-10 w-full items-center pt-5">
        <Link className='pt-4 flex gap-3 font-semibold text-xl text-zinc-200 items-center' to='/'><i className="ri-arrow-left-line mt-1"></i> Movie</Link>
        <Topnav />
      </div>
      <InfiniteScroll media_type='person'  getTrending={getPerson} hasMore={hasMore} media={media} />
    </div>
  )
}

export default PeopleLayout