
import { combineReducers, legacy_createStore } from "redux";
import { todoreducer } from "./Todo/reducer";


const rootreducer=combineReducers({
    Tododata:todoreducer
})

export const store = legacy_createStore(rootreducer)