import React from 'react'
import { Provider } from 'react-redux'
import Showritikmuskan from '../Showritikmuskan'
import {store} from "./store"

const Showmain = () => {
  return (
    <div>
    <Provider store={store}>
    <Showritikmuskan></Showritikmuskan>
    </Provider>
    </div>
  )
}

export default Showmain