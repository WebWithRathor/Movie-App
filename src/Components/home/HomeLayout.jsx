import React, { useEffect, useState } from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'
import Header from '../partials/Header'
import instance from '../utils/axios'
import HorizontalCards from '../partials/HorizontalCards'

const HomeLayout = () => {

  const [wallpaper, setwallpaper] = useState(null)
  const [shows, setshows] = useState([])
  const getTrending = async()=>{
    try {
        const {data} = await instance('/trending/all/day');
        let random = (Math.random()*data.results.length).toFixed()
        setshows(data.results)
        setwallpaper(data.results[random])
      } catch (error) {
        console.log(error);
      }
    }

useEffect(()=>{
    getTrending();
},[])


  return wallpaper ? (
    <div className='h-full w-full flex '>
    <div className='h-full w-1/5 '>
      <Sidenav />
    </div>
    <div className="h-full right w-4/5 p-4">
      <Topnav />
      <Header wallpaper={wallpaper} />
      <HorizontalCards shows={shows}/>
    </div>
  </div>
  ) : <h1 onLoad={()=>{getTrending()}}>Loadiinng</h1>
}

export default HomeLayout