import React from 'react'
import Todolist from './Todolist'

let inistate = [
    {id:1,title:"task1",status:false},
    {id:2,title:"task2",status:false},
    {id:3,title:"task3",status:false}
]

const Addtodo = () => {

const [todo,setTodo] = React.useState(inistate)

const [addtodo,setAddtodo] = React.useState("")

  return (
    <div>
    <input placeholder='add todo' value={addtodo} onChange={(e)=>setAddtodo(e.target.value)}></input>
    <button>Add</button>
    {
        todo.map((el)=><Todolist key={el.id} {...el}></Todolist>)
    }
    </div>
  )
}

export default Addtodo