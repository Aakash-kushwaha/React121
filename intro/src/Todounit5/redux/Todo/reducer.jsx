import * as types from "./actionType"


const inistate = {
    loading:false,
    error:null,
    gettodo:[],
    deleteTodo:null
}

export const todoreducer=(state=inistate,{type,payload})=>{
    switch(type){
        case types.POST_TODO_REQUEST:{
            return{
                ...state,
                loading:true,
            }
        }
        case types.POST_TODO_SUCCESS:{
           let newtodo = [...state.gettodo,payload]
            return{
                ...state,
                loading:false,
                gettodo:newtodo
            }
        }
        case types.POST_TODO_FAILURE:{
            return{
                ...state,
                error:payload,

            }
        }
        case types.GET_TODO_REQUEST:{
            return{
                ...state,
                loading:true,
            }
        }
        case types.GET_TODO_SUCCESS:{
            return{
                ...state,
                loading:false,
                gettodo:payload
            }
        }
        case types.GET_TODO_FAILURE:{
            return{
                ...state,
                error:payload,
                
            }
        }
        case types.DELETE_TODO_REQUEST:{
            return{
                ...state,
                loading:true,
            }
        }
        case types.DELETE_TODO_SUCCESS:{
            // console.log("delete",payload)
            let lefttodo = state.gettodo.filter((el)=>el.id!=payload)
            return{
                ...state,
                loading:false,
                gettodo:lefttodo
            }
        }
        case types.DELETE_TODO_FAILURE:{
            return{
                ...state,
                error:payload,
                
            }
        }
        case types.PATCH_TODO_REQUEST:{
            return{
                ...state,
                loading:true,
            }
        }
        case types.PATCH_TODO_SUCCESS:{
            console.log(payload,"comlltetogle")
            let updatetodo = state.gettodo.map((el)=>el.id==payload.id?payload:el)
            return{
                ...state,
                loading:false,
                gettodo:updatetodo
            }
        }
        case types.PATCH_TODO_FAILURE:{
            return{
                ...state,
                error:payload,
                
            }
        }
        default:
            return state
    }
}