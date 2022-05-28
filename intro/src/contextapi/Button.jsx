import React, { useContext } from 'react'
import { ThemeContext } from './Contextapiprovider'
import style from "./Button.module.css"


const Button = ({text}) => {
  
  const [theme] = useContext(ThemeContext)
  // console.log(theme)
  return (
    <div>
    <div className={`${style.buttonbase} ${theme==="light"? style.light : style.buttondark}`}>{text}</div>
    </div>
  )
}

export default Button