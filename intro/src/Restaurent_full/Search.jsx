import React from 'react'

const Search = ({setq,search,setsearch}) => {
  return (
    
<div style={{margin:"auto",width:"20rem"}}>
<input placeholder='search' value={search} onChange={(e)=>setsearch(e.target.value)}></input>
<button onClick={()=>setq(search)}>Search</button>
    </div>
  )
}

export default Search