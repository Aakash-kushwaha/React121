import * as types from "./actionType"
import axios from "axios"

const loginsuccess=(payload)=>{
    return{
        type:types.LOGIN_SUCCESS,
        payload
    }

}


const loginsfailure=()=>{
    return{
        type:types.LOGIN_FAILURE,
      
    }

}

const logIn=(payload)=>(dispatch)=>{
    axios.post("https://reqres.in/api/login")
    .then((res)=>dispatch(loginsuccess(res.data)))
    .catch((err)=>dispatch(loginsfailure()))
}


export {logIn}