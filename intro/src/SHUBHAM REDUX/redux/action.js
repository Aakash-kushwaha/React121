import axios from "axios"
import * as types from "./actionType"

// action file is for doing all our logics and funcions
const increase=()=>{
    return{
        type:types.INCREASE,payload:1
    }
}


const decrease=()=>{
    return{
        type:types.DECREASE,payload:1
    }
}

const todosuccess=(payload)=>{
    return{
        type: "DATA",
        payload
    }
}

const getTodo =(payload)=>(dispatch)=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>dispatch(todosuccess(res.data)))
}

export {increase,decrease,getTodo}

