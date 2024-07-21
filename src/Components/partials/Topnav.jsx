import React, { useEffect, useState } from 'react'
import instance from '../utils/axios'
import { Link } from 'react-router-dom'

const Topnav = () => {

  const [query, setquery] = useState('')
  const [results, setresults] = useState([])

  const GetResults = async () => {
    try {
      const { data } = await instance.get(`/search/multi?include_adult=false&language=en-US&page=1&query=${query}`)
      setresults(data.results)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(results);
  useEffect(() => {
    if (query != '') GetResults()
  }, [query])


  return (
    <div className='w-full pt-4 flex relative justify-center gap-10 text-white pb-2'>
      <div className="search border-b flex gap-4 w-full md:w-2/5 items-center">
        <i className="ri-search-line text-lg  text-white"></i>
        <input onChange={(e) => setquery(e.target.value)} value={query} type="text" className='w-full py-2 bg-transparent  outline-none' placeholder='Search here' />
        <i onClick={() => setquery('')} className={`ri-close-line cursor-pointer text-lg ${query === '' ? 'hidden' : 'inline-block'}  text-white`}></i>
      </div>
      <div className={`${query === '' ? 'hidden' : 'inline-block'} rounded space-y-1  absolute top-full  results w-full md:w-2/5 max-h-[50vh] overflow-hidden z-[9999] bg-gray-700 overflow-y-auto`}>
        {results.map((e,i) => <Link to={`/${e.media_type}/details/${e.id}`} key={i} className='px-3 py-2 bg-zinc-300 hover:bg-gray-900 group transition-all  flex gap-4 items-center'>
          <img src={ e.poster_path || e.backdrop_path || e.profile_path ? `https://image.tmdb.org/t/p/original${e.poster_path || e.backdrop_path || e.profile_path}` : 'https://as1.ftcdn.net/v2/jpg/05/03/24/40/1000_F_503244059_fRjgerSXBfOYZqTpei4oqyEpQrhbpOML.jpg'} className='h-14 object-cover rounded-lg aspect-square ' alt="" />
          <h1 className='text-gray-900 group-hover:text-zinc-200 text-md font-semibold'>{e.original_title || e.name || e.original_name}</h1>
        </Link>)}
      </div>
    </div>
  )
}

export default Topnav