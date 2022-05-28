import React, { useContext } from 'react'
import { ThemeContext } from './Contextapiprovider'
import style from "./Navbar.module.css"
const Navbar = () => {
    const [theme] = useContext(ThemeContext)
  return (
    <div className={`${style.Base} ${theme==="light"? style.light: style.dark}`}>
    <div>home</div>
    <div>about</div>
    <div>log in</div>
    </div>
  )
}

export default Navbar