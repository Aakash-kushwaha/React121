import React from 'react'

const Login = () => {
    const [values,setValues]= React.useState("")
    const handleChange=(e)=>{
        
        setValues()
    }
  return (
    <div>
    <div>
        <input onChange={handleChange} type="text" id="name" placeholder='type name'></input> <br></br>
        <input onChange={handleChange} type="password" id="password" placeholder='type passoword'></input> <br></br>
        <input type="submit" value="login"></input>
    </div>



    </div>
  )
}

export default Login