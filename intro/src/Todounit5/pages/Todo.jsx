import React from 'react'
import Addtodo from './Addtodo'
import Todolist from './Todolist'
import {useDispatch} from "react-redux"
import {getTodo} from "../redux/Todo/action"

const Todo = () => {
  const dispatch= useDispatch()

  
  return (
    <div>
    <Addtodo></Addtodo>
    <Todolist></Todolist>
    </div>
  )
}

export default Todo