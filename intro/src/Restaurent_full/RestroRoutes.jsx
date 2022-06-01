import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Navbar from './Navbar'
import Productdetails from './Productdetails'
import Products from './Products'

const RestroRoutes = () => {
  return (
    <div>
    <Navbar></Navbar>
   
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/products/:id' element={<Productdetails></Productdetails>}></Route>
    </Routes>
    </div>
  )
}

export default RestroRoutes