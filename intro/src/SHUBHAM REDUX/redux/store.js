import {applyMiddleware, legacy_createStore} from "redux"
// import thunk from "redux-thunk"

import reducer from "./reducer"

const shivanikathunk =({dispatch})=>(next)=>(action)=>{
    // console.log(action,"action")
    if(typeof action ==="function"){
  
       return  action(dispatch)
    }
   return next(action)
}


export const store = legacy_createStore(reducer,applyMiddleware(shivanikathunk))
// console.log(store.getState(),"store")






