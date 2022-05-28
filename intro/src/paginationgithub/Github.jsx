import axios from 'axios'
import React from 'react'




const Githubusers = (q,page=1)=>{
    return axios("https://api.github.com/search/users",{
        method:"GET",
        params:{
            q,
            per_page:5,
            page
           
        }
    })
}



const Github = () => {

const [loading,setLoading] = React.useState(true);
const [error,setError] = React.useState(false)
const [query,setQuery]= React.useState("masai")
const [data,setData]= React.useState([])
const [page,setPage] = React.useState(1)
const [pagecount,setPagecount] =React.useState(0)
// console.log(data)





const getData=(q="masai")=>{
  axios("https://api.github.com/search/users",{
    method:"GET",
    params:{
        q, 
    }
}).then((res)=>{
  setPagecount(res.data.total_count)
  // console.log(typeof res.data.total_count)
  // console.log("runing")

}).then((err)=>{
  console.log(err,"err")
})
}

React.useEffect(()=>{
  console.log("showpages")
  getData(query)
},[query])




React.useEffect(()=>{
    setLoading(true)
    Githubusers(query,page)
    .then((res)=>{
      setLoading(false)
      setData(res.data)
      console.log(res.data)
      // setPagecount(res.data.total_count)
      setError(false)
    }).catch((err)=>{
      setLoading(false)
      setError(true)
      console.log(err,"error")
    })
},[query,page])


const handlClick=(query)=>{
  console.log(query)
  setQuery(query)
  // Githubusers(query)
}

  return (<>
    <div>Github User</div>
    { loading && <div>...loading</div>}
    {error && <div>...error</div>}
     <Searchbox handlClick={handlClick}></Searchbox>
     {data?.items?.map((item)=>{
      return <Githubcard key={item.id} {...item}></Githubcard>
     })}
     <div >pages:{Math.floor(pagecount/5)}</div>
     <button disabled={page===1} onClick={()=>{setPage(page-1);setPagecount(pagecount+5)}}>prev</button>
      <button  onClick={()=>{setPage(page+1);setPagecount(pagecount-5)}}>Next</button>
    </> ) 
}


const Searchbox=({handlClick})=>{
  const [text,setText] = React.useState("")
  return(<div style={{display:"flex",margin:"auto", width:"20%", }}>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
    <button onClick={()=>handlClick(text)} >Search</button>
    <br/>


  </div>)
}

const Githubcard=({avatar_url,login})=>{

  return(<>
    <div style={{display:"flex", gap:"2rem",marginBottom:"1rem",marginLeft:"1rem" }}>
      <img src={avatar_url} width="50px" alt='login'></img>
      <div>{login}</div>
    </div>
   
  </>)
}

export default Github