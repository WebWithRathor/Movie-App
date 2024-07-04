import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../Components/home/HomeLayout'

const Mainroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomeLayout />} />
        </Routes>
    </>
  )
}

export default Mainroutes