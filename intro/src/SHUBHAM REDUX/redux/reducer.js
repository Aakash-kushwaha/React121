import * as types from "./actionType"


let initialstate = {
    count:0,
    todo:[],
    data:null
   
}



const reducer=(state=initialstate,action)=>{

    // console.log(action,"action")
    const {type,payload}= action
    // return action
    switch(type){
case types.INCREASE:{
    return {
        ...state,
        count :state.count + payload
    }
}
case types.DECREASE:{
    return{
        ...state,
        count: state.count-payload
    }
}

case "DATA":{
    return{
        ...state,
        todo:payload
    }
}
default:return state
    }
}

export default reducer