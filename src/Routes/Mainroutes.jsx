import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../Components/Layout/HomeLayout'
import TrendingLayout from '../Components/Layout/TrendingLayout'
import Loading from '../Components/partials/Loading'

const Mainroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path='/trending' element={<TrendingLayout/>} />
            <Route path='*' element={<Loading/>} />
        </Routes>
    </>
  )
}

export default Mainroutes