import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",border:"1px solid black"}}>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
   
    </div>
  )
}

export default Navbar