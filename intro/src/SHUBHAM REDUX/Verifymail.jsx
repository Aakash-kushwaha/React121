import { border } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Verifymail = () => {
// const navigate = useNavigate()
    const [data,setData]= React.useState({})

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
   
 const handleSubmit=(e)=>{
    e.preventDefault()
    axios.get("http://localhost:8080/verifyemail",data)
    .then((res)=>{console.log(res) ;
        // navigate("/Changepass")
    })
    .catch((err)=>{console.log(err);alert("Madarchod hack krta hai")})
 }
  return (
    <form onClick={handleSubmit}>

<input placeholder='Confirm Email Address' type="email" name="email" onChange={handleChange}></input>
<br></br>
<input style={{backgroundColor:"black",border:"none",color:"white"}} type="submit" value="confirm"></input>

    </form>
  )
}

export default Verifymail