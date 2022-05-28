import React, { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from './Contextapiprovider'
import Navbar from './Navbar'


const Showcontext = () => {
  const [theme,toggle] = useContext(ThemeContext)
//   console.log(toggle)

  return (
    <div>
    <Navbar></Navbar>
       <button onClick={toggle} style={{display:"flex",flexDirection:"left"}}>toggle</button>
       <Button text="THEME"></Button>
    
    </div>
  )
}

export default Showcontext