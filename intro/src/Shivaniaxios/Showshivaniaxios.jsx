import React from 'react';
import axios from 'axios'
import { Input } from '@chakra-ui/react';

export default function Showshivaniaxios(){
  const [text,setTexxt] = React.useState("")
  
   const Adddata=(value)=>{
    axios.post("https://testingwithprayas.herokuapp.com/articles",{title:value,status:false})
    .then(function (response) {
   
      console.log(response.data,"post");
    })
    .catch(function (error) {

      console.log(error);
    })
   }
 
   const remove=(id)=>{
    axios.delete(`https://testingwithprayas.herokuapp.com/articles/${id}`)
.then(function (response) {

  console.log(response.data,"remove");
})
   }

   const editdata=(id)=>{
    axios.patch(`https://testingwithprayas.herokuapp.com/articles/${id}`,{status:true})
.then(function (response) {

  console.log(response.data,"patch");
})
   }

   const getdata=()=>{
    axios.get("https://testingwithprayas.herokuapp.com/articles")
    .then(function (response) {
    
      console.log(response.data,"get");
    })
   }
  return(
    // const axios = require('axios').default;

    <>
     <Input onChange={(e)=>setTexxt(e.target.value)} value={text} placeholder="Enter id"></Input>
     <br></br>
    <button onClick={()=>Adddata(text)}>add</button>
    <button  onClick={()=>remove(text)}>delete</button>
    <button  onClick={()=>editdata(text)}>patch</button>
    <button  onClick={()=>getdata()}>get</button>
   

    </>
  )
}
