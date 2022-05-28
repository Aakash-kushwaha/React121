import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'

const Showauthpage = () => {

  return (
    <div>
    <Navbar></Navbar>
     <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         
     </Routes>
    </div>
  )
}

export default Showauthpage