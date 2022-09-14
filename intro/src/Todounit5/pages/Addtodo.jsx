import React from 'react'
import { postTodo } from '../redux/Todo/action'
import {useSelector,useDispatch} from "react-redux"

const   Addtodo = () => {
    // const data = useSelector((store)=>store)
      // console.log(data,"store")
    const [text,setText] = React.useState("")
    const dispatch= useDispatch()

   const Addtodo=()=>{
    if(text) postTodo(dispatch,text) ; setText("")
    
   }


  return (
    <div>
    
    <input placeholder='Add todo' value={text} onChange={(e)=>setText(e.target.value)}></input>
    <button onClick={()=>Addtodo()}>Add</button>
  
    </div>
  )
}

export default Addtodo