import React, { useEffect, useState } from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'
import Header from '../partials/Header'
import instance from '../utils/axios'
import HorizontalCards from '../partials/HorizontalCards'
import FilterTrending from '../partials/FilterTrending'
import Loading from '../partials/Loading'

const HomeLayout = () => {

  const [wallpaper, setwallpaper] = useState(null)
  const [category, setcategory] = useState('all')
  const [shows, setshows] = useState([])

  const getWallpaper = async () => {
    try {
      const { data } = await instance('/trending/all/day');
      let random = (Math.random() * data.results.length).toFixed()
      setwallpaper(data.results[random])
    } catch (error) {
      console.log(error);
    }
  }

  const getCategory = async () => {
    try {
      const { data } = await instance.get(`/trending/${category}/day`);
      console.log(data);
      setshows(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCategory()
    !wallpaper && getWallpaper();
  }, [category])


  return wallpaper ? (
    <div className='h-full w-full flex '>
      <div className='h-full w-1/5 '>
        <Sidenav />
      </div>
      <div className="h-full right w-4/5 p-4 overflow-y-auto">
        <Topnav />
        <Header wallpaper={wallpaper} />
        <div className="flex mt-7 items-center justify-between mb-5">
          <h1 className=' text-2xl font-semibold text-white'>Trending</h1>
          <FilterTrending title={'Filter'} option={['all', 'movie', 'person', 'tv']} state={category} setstate={setcategory} />
        </div>
        <HorizontalCards shows={shows} />
      </div>
    </div>
  ) : <Loading trending={getWallpaper} />
}

export default HomeLayout