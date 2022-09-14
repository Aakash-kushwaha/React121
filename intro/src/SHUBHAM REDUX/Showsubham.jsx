import React from 'react'
// import { useReducer } from 'react'
import {Provider, shallowEqual, useDispatch, useSelector} from "react-redux"
import { decrease, getTodo, increase } from './redux/action'
import { store } from './redux/store'








const Showsubham = () => {

// {count:0}=={count:0}

const count = useSelector((store)=>store.count)

const dispatch = useDispatch()


const add=()=>{
    dispatch(increase())
}

const reduce=()=>{
    dispatch(decrease())
}

const getdata=()=>{
  // getTodo(dispatch)
  dispatch(getTodo())
}
  return (


   
    <div>
    <h1>{count}</h1>
        <button onClick={()=>add()}>add</button>
        <button onClick={()=>reduce()}>reduce</button>
        <h2>todo</h2>

        <button onClick={()=>getdata()}>GET THE DATA</button>
    </div>

  )
}

export default Showsubham