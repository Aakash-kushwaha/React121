import React from 'react'
import Form from './Form'

const Details = () => {
  const[UserDetails,setUserDetails] = React.useState({})
  console.log(UserDetails)
  return (
    <div>
    <Form UserDetails= {UserDetails} setUserDetails={setUserDetails}></Form>
       UserDetails
     <div>{UserDetails.name}</div>
     <div>{UserDetails.phone}</div>
     <div>{UserDetails.email}</div>
     <div>{UserDetails.password}</div>
     



    </div>
  )
}

export default Details