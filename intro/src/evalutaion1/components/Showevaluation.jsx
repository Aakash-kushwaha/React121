import axios from "axios";
import React, { useState } from "react";
import Button from "./Button";
import CandidateCard from "./CandidateCard";
// import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page,setPage]= useState(1)
  const [loading,setLoading]= useState(true)
  const [sortsalary,setsortSalary] = useState("ASC")
 const [desc,setdesc] = useState(false)


  console.log("page",page)
 function getData(page,sortsalary){
   return axios({
      method:"get",
      url:process.env.REACT_APP_API_KEY,
      params:{
      _page:page,
      _limit:5,
      _sort:"salary",
      _order:sortsalary
      }
    })
  }


  // if api doesnot work use this {http://localhost:3000/candidates} 




  React.useEffect(()=>{
   getData(page,sortsalary)
   .then(res=>{
    //  console.log(res)
     setData(res.data)
     setLoading(false)
   })
   .then(err=>{
console.log(err)
   })
  
  },[page,sortsalary])
console.log(data)

  return (
    <div className="App">
      <div>
       
         <div id="loading-container">{loading?"...Loading":""}</div>
      
        <Button onClick={()=>{setsortSalary("DESC");setdesc(!desc)}} id="SORT_BUTTON" title={desc?`Sort by ascending Salary`:`Sort by descending Salary`} />
        <Button onClick={()=>{setPage(page-1);setLoading(!loading)}} disabled={page===1} title="PREV" id="PREV" />
        <Button onClick={()=>{setPage(page+1);setLoading(!loading)}}   id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => {
       return <CandidateCard key={item.id} {...item}></CandidateCard>
      })}
    </div>
  );
}
