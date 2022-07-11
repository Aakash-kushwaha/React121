import axios from 'axios'
import React from 'react'

const Counter = () => {
    const [counter,setCounter]= React.useState(0)

    const Fetchdata=()=>{
      axios.get("http://localhost:8080/counter")
      .then((res)=>setCounter(res.data.value))
    
    }
    React.useEffect(()=>{
      Fetchdata()
    },[])
    const incrementHandler=()=>{
      console.log("heloo")
      axios.post("http://localhost:8080/counter",{value:counter+1})
      .then((res)=>setCounter(res.data.value))
    }
  return (
    <div>
   <h2>count is {counter}</h2>

   <button className='increment_count' onClick={incrementHandler}>increment</button>
   {/* <button className='decrement_count' disabled={counter===0} onClick={()=>setCounter(counter-1)}>decrement</button> */}

    </div>
  )
}

export default Counter