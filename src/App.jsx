import React from 'react'
import Sidenav from './Components/partials/Sidenav'
import Topnav from './Components/partials/Topnav'

const App = () => {
  return (
    <div className='h-screen w-full flex bg-gradient-to-bl from-gray-800 to-gray-950 '>
      <div className='h-full w-1/5 '>
        <Sidenav />
      </div>
      <div className="h-full right w-4/5">
        <Topnav />
      </div>
    </div>
  )
}

export default App