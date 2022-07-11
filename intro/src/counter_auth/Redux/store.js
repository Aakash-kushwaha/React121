import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import {counterreducer} from "./counter/counterreducer"
import {Authreducer} from "./Auth/authreducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootreducer = combineReducers({
   counterreducer,Authreducer
})

export const store = legacy_createStore(rootreducer,composeEnhancer(applyMiddleware(thunk)))