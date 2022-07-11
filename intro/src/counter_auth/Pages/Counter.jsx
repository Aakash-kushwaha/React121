import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((store)=>store.counterreducer.count)
    

    
  return (
    <div>
    

     <button>Login</button>
     
        <div>
            <h1>counter {count}</h1>
            <button>increase</button>
            <button>decrease</button>
            <br></br>
            <button>Logout</button>
        </div>

    </div>
  )
}

export default Counter