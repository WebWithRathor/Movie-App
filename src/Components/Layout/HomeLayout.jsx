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
      const video = (await instance.get(`/movie/${data.results[random].id}/videos`)).data.results.find(e=>e.type === "Trailer");
      console.log(video);
    } catch (error) {
      console.log(error);
    }
  }

  const getCategory = async () => {
    try {
      const { data } = await instance.get(`/trending/${category}/day`);
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
    <div className='md:h-full h-max w-full flex md:flex-row flex-col'>
      <div className='md:h-full md:w-1/5 h-max w-full '>
        <Sidenav />
      </div>
      <div className="h-full right w-full md:w-4/5 p-4 overflow-y-auto">
        <Topnav />
        <Header wallpaper={wallpaper} />
        <div className="flex mt-7 items-center justify-between mb-5">
          <h1 className=' text-2xl font-semibold text-white'>Trending</h1>
          <FilterTrending title={'Filter'} option={['all', 'movie', 'person', 'tv']} state={category} setstate={setcategory} />
        </div>
        <HorizontalCards shows={shows} />
      </div>
    </div>
  ) : <div className='p-10'>
    <Loading />
  </div>
}


  export default HomeLayout