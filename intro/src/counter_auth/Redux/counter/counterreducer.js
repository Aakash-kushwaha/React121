import * as types from "./actionType"

const inistate={
    count :0,

}


const counterreducer =(state=inistate,{type,payload})=>{
    switch(type){
        case types.INCREMENT_COUNTER:{
            return{
                count:state.count +payload
            }
        }
        case types.DECREMENT_COUNTER:{
            return{
                count:state.count -payload
            }
        }
        default:
            return state
    }
}

export  {counterreducer}