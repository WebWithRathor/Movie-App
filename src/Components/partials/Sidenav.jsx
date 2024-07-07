import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='w-full h-screen  text-white border-r-2'>
      <h1 className='text-4xl italic tracking-wider text-violet-300 px-6 pt-8 font-serif'>StreamDev</h1>
      <ul className='mt-8'>
        <h1 className='w-full inline-block py-3 px-6 text-xl border-b font-semibold  transition-all '>New feeds</h1>
        <Link to='/trending' className='w-full inline-block py-2 mt-5 px-6 font-semibold hover:text-black transition-all cursor-pointer hover:bg-gray-200'><i className="ri-fire-fill mr-3"></i> Trending</Link>
        <Link to='/popular' className='w-full inline-block py-2 px-6 font-semibold hover:text-black transition-all cursor-pointer hover:bg-gray-200'><i className="ri-sparkling-2-fill mr-3"></i> Popular</Link>
        <Link to='/movie' className='w-full inline-block py-2 px-6 font-semibold hover:text-black transition-all cursor-pointer hover:bg-gray-200'><i className="ri-movie-2-fill mr-3"></i> Movie</Link>
        <Link to='/tv' className='w-full inline-block py-2 px-6 font-semibold hover:text-black transition-all cursor-pointer hover:bg-gray-200'><i className="ri-tv-2-fill mr-3"></i> Tv Shows</Link>
        <Link to='/person' className='w-full inline-block py-2 px-6 font-semibold hover:text-black transition-all cursor-pointer hover:bg-gray-200'><i className="ri-team-fill mr-3"></i> People</Link>
        <h1 className='w-full inline-block py-3 px-6 text-xl font-semibold border-b   transition-all mt-10'>Website detatils</h1>
        <Link className='w-full inline-block py-2 mt-5 px-6 font-semibold hover:text-black transition-all cursor-pointer hover:bg-gray-200'><i className="ri-user-fill mr-3"></i> About Us</Link>
        <Link className='w-full inline-block py-2 px-6 font-semibold hover:text-black transition-all cursor-pointer hover:bg-gray-200'><i className="ri-customer-service-2-fill mr-3"></i> Contact Us</Link>
      </ul>
    </div>
  )
}

export default Sidenav