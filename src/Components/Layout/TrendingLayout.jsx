import React, { useEffect, useState } from 'react'
import Topnav from '../partials/Topnav'
import FilterTrending from '../partials/FilterTrending'
import { Link } from 'react-router-dom'
import instance from '../utils/axios'
import InfiniteScroll from '../partials/InfiniteScroll'

const TrendingLayout = () => {
  document.title = 'Trendings';

  const [duration, setduration] = useState('day');
  const [category, setcategory] = useState('all');
  const [media, setMedia] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)

  const getTrending = async () => {
    try {
      const { data } = await instance.get(`/trending/${category}/${duration}?page=${page}`)
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
      getTrending()
    } else {
      setpage(1)
      setMedia([])
      getTrending()
    }
  }

  useEffect(() => {
    refreshMedia()
  }, [duration, category])

  return (
    <div className='h-full w-full'>
      <div className="flex md:flex-row flex-col px-10 w-full items-center pt-5">
        <Link className='pt-4 flex gap-3 font-semibold text-xl text-zinc-200 items-center' to='/'><i className="ri-arrow-left-line mt-1"></i> Trending</Link>
        <Topnav />
        <div className="options flex gap-5 pt-4">
          <FilterTrending state={category} setstate={setcategory} title={'Filter'} option={['all', 'movie', 'person', 'tv']} />
          <FilterTrending state={duration} setstate={setduration} title={'Duration'} option={['day', 'week']} />
        </div>
      </div>
      <InfiniteScroll getTrending={getTrending} hasMore={hasMore} media={media} />
    </div>
  )
}

export default TrendingLayout