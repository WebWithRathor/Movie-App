import React from 'react'
import Sidenav from './Components/partials/Sidenav'
import Topnav from './Components/partials/Topnav'
import Mainroutes from './Routes/Mainroutes'

const App = () => {
  return (
    <div className='bg-gradient-to-bl from-gray-800 to-gray-950 h-screen w-full'>
      <Mainroutes />
    </div>
  )
}

export default App