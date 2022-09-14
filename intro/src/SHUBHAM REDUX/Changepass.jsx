import axios from 'axios'
import React from 'react'

const Changepass = () => {
    const [data,setData]= React.useState({})

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
   
 const handleSubmit=(e)=>{
    e.preventDefault()
    if(data.New_password==data.confirm_password){
        let passsword = data.confirm_password
        axios.patch("http://localhost:8080/updated",passsword)
        .then((res)=>console.log(res))
    }else{
        alert("Password does not match")
    }
   
 }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder='New Password' type="text" name="New_password" onChange={handleChange}></input>
        <br></br>
<input placeholder='Confirm Passoword' type="text" name="confirm_password" onChange={handleChange}></input>
<br></br>
<input style={{backgroundColor:"black",border:"none",color:"white"}} type="submit" value='Update Password'></input>
    </form>
  )
}

export default Changepass