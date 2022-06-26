import React from 'react'
import Todo from './pages/Todo'
import {Provider} from "react-redux"
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import Allroutes from './Routes/Allroutes'

const Showtodo = () => {
  return (
    <div>
    <BrowserRouter>
    <Provider store={store}>
    <Allroutes></Allroutes>
    </Provider>
    </BrowserRouter>
    </div>
  )
}

export default Showtodo