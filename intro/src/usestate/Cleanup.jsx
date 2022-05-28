import React from 'react'

const Cleanup = () => {


    // const [state,setState]= React.useState(0)
    const [state1,setState1]= React.useState('')
    const Checkref = React.useRef('')
    
console.log(Checkref)

    // console.log(state1,"state1")
    // console.log(Checkref.current,"checkref")
    // React.useEffect(()=>{
    //      console.log("state")
    //      return()=> {
    //          console.log("cleanup state")
    // }
    // },[state])

    React.useEffect(()=>{
   Checkref.current = state1
    })

//     React.useEffect(()=>{
//         console.log("state1")
//         return()=> {
//             console.log("cleanup state1")
//    }
//    },[state1])

   const handleClick=()=>{

   }

  return (<>
  <input ref={Checkref} value={state1} onChange={(e)=>setState1(e.target.value)} ></input>
  <div>state1:{state1}</div>
  <div>checkref;{Checkref.current}</div>
  <button onClick={handleClick}>focus</button>
  
    {/* <div>state {state}</div>
    <div>state1 {state1}</div>
         <button onClick={()=>setState(state+1)}>Add</button>
         <button  onClick={()=>setState1(state1-1)}>remove</button> */}
    </> )
}

export default Cleanup