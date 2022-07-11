import React from 'react'
import Counter from './Pages/Counter'
import {Provider} from "react-redux"
import { store } from './Redux/store'

const Showcouterauth = () => {
  return (
    <div>
    <Provider store={store}>
    <Counter></Counter>
    </Provider>
    </div>
  )
}

export default Showcouterauth