import React from 'react'

const Sort = ({price,setprice}) => {
  return (<>
    <div style={{margin:"auto",width:"20rem"}}>
    <button onClick={()=>setprice("asc")}>By ASC price</button>
    <button  onClick={()=>setprice("desc")}>By DESC price </button>
    </div>
   
</>  )
}

export default Sort