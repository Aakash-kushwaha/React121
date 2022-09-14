import {applyMiddleware, legacy_createStore} from "redux"
import reducer from "./reducer"

let initial ={
    count : 0,
    data:"data"
}


export const store = legacy_createStore(reducer,initial)

// console.log(store.getState())