import React from 'react'




const Uplift = () => {

   let [count,setCount] = React.useState(0)
console.log(count,"outside")
   const localIncrease=()=>{
       count = count+1
       console.log(count,"inside")
   }

   const internalIncrease=()=>{
      setCount(prev=>prev+1)
      setCount(prev=>prev+2)
      
   }
   
  return (<>
   <div>counter</div>
   <div>{count}</div>
   <button onClick={localIncrease}>local increase</button>
   <button onClick={internalIncrease}>internal increase</button>
  </>
 
  )
}

export default Uplift