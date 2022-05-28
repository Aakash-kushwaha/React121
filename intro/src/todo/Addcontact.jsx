import React from 'react';



const Addcontact=(prop)=>{
     

    const handleClick=()=>{
     
      if(text){
        prop?.Chalbhai(text,phone)
      }
     setText("")
     setPhone("")
    }
 


     const [text, setText]= React.useState("")
     const [phone,setPhone]= React.useState("")


     return(  <>
       <div>
         <input placeholder='Add Name'  value= {text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div>
         <input placeholder='Add Number'  value= {phone} onChange={(e)=>setPhone(e.target.value)}></input>
        </div>
        <button onClick={handleClick}>Add</button>
        </> )
   }


 

  
 




export default Addcontact;
