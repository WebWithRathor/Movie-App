import React from 'react'
import Topnav from '../partials/Topnav'
import FilterTrending from '../partials/FilterTrending'
import { Link } from 'react-router-dom'

const TrendingLayout = () => {
  return (
    <div className='h-screen w-full'>
      <div className="flex px-10 w-full items-center pt-5">
        <Link className='pt-4 flex gap-3 font-semibold text-xl text-zinc-200 items-center' to='/'><i className="ri-arrow-left-line mt-1"></i> Trending</Link>
        <Topnav />
        <div className="options flex gap-5 pt-4">
          <FilterTrending title={'Filter'} option={['all', 'movie', 'person' , 'tv']} />
          <FilterTrending title={'Duration'} option={['day', 'week']} />
        </div>
      </div>
    </div>
  )
}

export default TrendingLayout