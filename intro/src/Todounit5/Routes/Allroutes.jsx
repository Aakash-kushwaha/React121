import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addtodo from '../pages/Addtodo'
import Todo from '../pages/Todo'
import Todolist from '../pages/Todolist'
import Tododetails from "../pages/Tododetails"

const Allroutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element = {<Todo></Todo>}></Route>
        <Route path="todo/:id" element={<Tododetails></Tododetails>}></Route>
    </Routes>
    </div>
  )
}

export default Allroutes