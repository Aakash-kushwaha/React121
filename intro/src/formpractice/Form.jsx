import React from 'react'

const Form = ({UserDetails,setUserDetails}) => {
  const [data,setData]= React.useState({})

  const handleChange=(e)=>{
    setData({ ...data,
        [e.target.id]: e.target.value
    })

  }

  const handleSubmit=(e)=>{
      e.preventDefault()
      console.log("heloo")
     setUserDetails(data)

  }


  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input onChange={handleChange} id="name" placeholder='name'></input><br></br>
    <input onChange={handleChange} id="phone" placeholder='phone'></input><br></br>
    <input onChange={handleChange} id="email" placeholder='email'></input><br></br>
    <input onChange={handleChange} id="password" placeholder='password'></input><br></br>
    <input type="submit" value="login"></input>
    </form>
    </div>
  )
}

export default Form