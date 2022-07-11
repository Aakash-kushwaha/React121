import * as types from "./actionType"

const inistate  = {
    isError:"",
    token:"",

}

const Authreducer=(state=inistate,{type,payload})=>{
    switch(type){
        case types.LOGIN_SUCCESS:{
            return{
                isError:"",
                token:payload
            }
        }
        case types.LOGIN_FAILURE:{
            return{
                isError:undefined,
                token:null
            }
        }
        default:
            return state
    }
}







export {Authreducer}