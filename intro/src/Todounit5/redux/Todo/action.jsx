
import axios from "axios"
import * as types from "./actionType"


const postTodorequest=()=>{
    return{
        type :types.POST_TODO_REQUEST,  
    }
}

const postTodosuccess=(payload)=>{
    return{
        type:types.POST_TODO_SUCCESS,
        payload
    }
}

const postTodofailure=(payload)=>{
    return{
        type:types.POST_TODO_FAILURE,
        payload
    }
}

const postTodo=(dispatch,payload)=>{
    dispatch(postTodorequest())
     axios.post("http://localhost:8080/todos",{name:payload,status:false})
     .then((res)=>{dispatch(postTodosuccess(res.data))})
     .catch((err)=>dispatch(postTodofailure(err.data)))
}






const getTodorequest=()=>{
    return{
        type :types.GET_TODO_REQUEST,  
    }
}

const getTodosuccess=(payload)=>{
    return{
        type:types.GET_TODO_SUCCESS,
        payload
    }
}

const getTodofailure=(payload)=>{
    return{
        type:types.GET_TODO_FAILURE,
        payload
    }
}

const getTodo=(dispatch)=>{
    dispatch(getTodorequest())
     axios.get("http://localhost:8080/todos")
     .then((res)=>dispatch(getTodosuccess(res.data)))
     .catch((err)=>dispatch(getTodofailure(err.data)))
}






const deleteTodorequest=()=>{
    return{
        type :types.DELETE_TODO_REQUEST,  
    }
}

const deleteTodosuccess=(payload)=>{
    // console.log(payload,"dletepayload")
    return{
        type:types.DELETE_TODO_SUCCESS,
        payload
    }
}

const deleteTodofailure=(payload)=>{
    return{
        type:types.DELETE_TODO_FAILURE,
        payload
    }
}

const deleteTodo=(dispatch,id)=>{
    dispatch(deleteTodorequest())
     axios.delete(`http://localhost:8080/todos/${id}`)
     .then((res)=>{dispatch(deleteTodosuccess(id))})
     .catch((err)=>dispatch(deleteTodofailure(err.data)))
}




const patchTodorequest=()=>{
    return{
        type :types.PATCH_TODO_REQUEST,  
    }
}

const patchTodosuccess=(payload)=>{
    return{
        type:types.PATCH_TODO_SUCCESS,
        payload
    }
}

const patchTodofailure=(payload)=>{
    return{
        type:types.PATCH_TODO_FAILURE,
        payload
    }
}

const patchTodo=(dispatch,id,payload)=>{
    console.log(payload,"patch")
    dispatch(patchTodorequest())
     axios.patch(`http://localhost:8080/todos/${id}`,payload)
     .then((res)=>dispatch(patchTodosuccess(res.data)))
     .catch((err)=>dispatch(patchTodofailure(err.data)))
}






export {postTodo,getTodo,deleteTodo,patchTodo}