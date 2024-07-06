import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {

  const [query, setquery] = useState('')

  return (
    <div className='w-full pt-8 flex relative justify-center gap-10 text-white pb-2'>
      <div className="search border-b flex gap-4 w-2/5 items-center">
        <i className="ri-search-line text-lg  text-white"></i>
        <input onChange={(e) => setquery(e.target.value)} value={query} type="text" className='w-full py-2 bg-transparent  outline-none' placeholder='Search here' />
        <i onClick={() => setquery('')} className={`ri-close-line cursor-pointer text-lg ${query === '' ? 'hidden' : 'inline-block'}  text-white`}></i>
      </div>
      <div className={`${query === '' ? 'hidden' : 'inline-block'} rounded space-y-1  absolute top-full  results w-2/5 max-h-[50vh] overflow-hidden overflow-y-auto`}>
        {/* <Link className='px-3 py-2 bg-zinc-300 hover:bg-gray-900 group transition-all  flex gap-4 items-center'>
            <img src="" className='h-14 rounded aspect-square bg-gray-200' alt="k" />
            <h1 className='text-gray-900 group-hover:text-zinc-200 text-lg font-semibold'>Hello</h1>
        </Link> */}
      </div>
    </div>
  )
}

export default Topnav