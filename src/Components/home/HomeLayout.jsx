import React from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'

const HomeLayout = () => {
  return (
    <div className='h-screen w-full flex'>
      <Sidenav/>
      <div className="right">
        <Topnav/>
      </div>
    </div>
  )
}

export default HomeLayout