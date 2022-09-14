import * as types from "./actionType"
// import {INCREASE} from "./actionType"



   

  const reducer=(state,action)=>{
        // console.log(state)
      switch(action.type){
       
        case types.INCREASE:{
     
            return{
                
                count : state.count+1
            }
        }
        case types.DECREASE:{
            return {
              count:state.count-1
            }
        }
       default:
        return state
      }
  }


  export default reducer