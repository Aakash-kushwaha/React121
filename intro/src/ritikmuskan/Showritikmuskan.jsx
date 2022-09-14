import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import *as types from "./redux/actionType"





const Showritikmuskan = () => {

   const [state,setState] = React.useState('')
   const count = useSelector((store)=>store.count)
   console.log(count,"uselsectore")

 

     const dispatch = useDispatch()
     
    const runfunction=()=>{
        
         dispatch({type:"INCREASE"})
        //  setState(count)
    }

  return (
    
    <div>Showritikmuskan {count}
    <button onClick={runfunction}>click me</button>
    
    </div>
  )
}

export default Showritikmuskan

