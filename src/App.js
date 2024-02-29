import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import MovieDetails from './pages/MovieDetails'
import Favourite from './pages/Favourite'
const App = () => {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/movie/:id' element={<MovieDetails></MovieDetails>}></Route>
        <Route path='/favourite' element={<Favourite/>}></Route>
        </Routes>
      
    </>
  )
}
export default App