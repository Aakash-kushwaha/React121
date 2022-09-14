import React from 'react'
import { useSelector } from 'react-redux'

const Todo = () => {
    const Todo  = useSelector((store)=>store.todo)
  return (
    <div>Todo</div>
  )
}

export default Todo