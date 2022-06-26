import React from 'react'
import { useSelector } from 'react-redux'
import {useParams} from "react-router-dom"

const Tododetails = () => {

  const todo = useSelector((store)=>store.Tododata.gettodo)
 
  const {id} = useParams()
  
  const currentTodo = todo.filter((item)=>item.id===Number(id))


  return (
    <div>{currentTodo[0].name}</div>
  )
}

export default Tododetails