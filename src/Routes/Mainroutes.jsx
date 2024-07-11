import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../Components/Layout/HomeLayout'
import TrendingLayout from '../Components/Layout/TrendingLayout'
import Loading from '../Components/partials/Loading'
import MovieLayout from '../Components/Layout/MovieLayout'
import PeopleLayout from '../Components/Layout/PeopleLayout'
import TvLayout from '../Components/Layout/TvLayout'
import PoplarLayout from '../Components/Layout/PoplarLayout'
import MovieDetails from '../Components/Layout/MovieDetails'
import TvDetails from '../Components/Layout/TvDetails'
import PeopleDetails from '../Components/Layout/PeopleDetails'
import Trailer from '../Components/partials/Trailer'

const Mainroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path='/trending' element={<TrendingLayout/>} />
            <Route path='/movie' element={<MovieLayout/>} />
            <Route path='/movie/details/:id' element={<MovieDetails/>} >
              <Route path='trailer/:trailerId' element={<Trailer/>} />
            </Route>
            <Route path='/person/details/:id' element={<PeopleDetails/>} />
            <Route path='/tv/details/:id' element={<TvDetails/>} >
              <Route path='trailer/:trailerId' element={<Trailer/>} />
            </Route>
            <Route path='/person' element={<PeopleLayout/>} />
            <Route path='/tv' element={<TvLayout/>} />
            <Route path='/popular' element={<PoplarLayout/>} />
            <Route path='*' element={<Loading/>} />
        </Routes>
    </>
  )
}

export default Mainroutes