
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getTodo, patchTodo, postTodo } from '../redux/Todo/action'
import { Link } from 'react-router-dom'

const Todolist = () => {

  const [editstatus,seteditStatus] = React.useState(null)

  const [text,setText] = React.useState("")

 const Addtodo=()=>{
  if(text) postTodo(dispatch,text) ; 
  
 }


    const todos = useSelector((store)=>store.Tododata.gettodo)
    console.log(todos,"todo")
   const dispatch = useDispatch()

   
    // console.log(todos,"todos")
    const complete=(id,status)=>{
       patchTodo(dispatch,id,status)
      //  setText("")
       seteditStatus(null)
    }


    const removeTodo=(id)=>{
      deleteTodo(dispatch,id)
    }


    React.useEffect(() => {
      if(todos?.length===0){
        getTodo(dispatch)
      }
    
    }, [])

  return (
    <div>
     {
      todos && todos.map((el)=>{
        return(
         <div key={el.id}>
         {
          editstatus ==el.id? 
            <div>
    <input placeholder='Add todo' value={text} onChange={(e)=>setText(e.target.value)}></input>
    <button onClick={()=>complete(el.id,{name:text})}>Add</button>
    </div> 
  
      :
          <div key={el.id} style={{display:"flex",gap:"1rem"}}>
          <Link to={`todo/${el.id}`}>
            {el.name}
          </Link>
          <button onClick={()=>removeTodo(el.id)}>Remove</button>
           <button onClick={()=>seteditStatus(el.id)}>Edit</button>       
          <button onClick={()=>complete(el.id,{status:!el.status})}>{el.status?"completed":"complete"}</button>
          </div> 
        
        
        }  </div>  )
      })
     }
    </div>
  )
}

export default Todolist