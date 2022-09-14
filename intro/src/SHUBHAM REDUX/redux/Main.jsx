import React from 'react'
import { Provider } from 'react-redux'
import Changepass from '../Changepass'
import Showsubham from '../Showsubham'
import Signup from '../Signup'
import Verifymail from '../Verifymail'
import { store } from './store'

const Main = () => {
  return (
    <Provider store={store}>
        {/* <Showsubham></Showsubham> */}
        {/* <Signup></Signup> */}
        <Verifymail></Verifymail>
        <Changepass></Changepass>
</Provider>
  )
}

export default Main