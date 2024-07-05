import React, { useState } from 'react'

const Topnav = () => {

  const [Search, setSearch] = useState('')

  return (
    <div className='w-full pt-8 flex items-center justify-center gap-10 text-white py-4'>
        <div className="search border-b flex gap-4 w-1/3 items-center">
        <i className="ri-search-line text-lg  text-white"></i>
       <input onChange={(e)=>setSearch(e.target.value)} value={Search} type="text" className='w-full py-2 bg-transparent  outline-none' placeholder='Search here' />
        <i onClick={()=>setSearch('')} className="ri-close-line cursor-pointer text-lg  text-white"></i>
        </div>
    </div>
  )
}

export default Topnav