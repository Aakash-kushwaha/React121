import React from 'react'
import Pin from './Pin'
import "./Pin.css"

const Showinputapp = () => {
    const [otp,setOtp] = React.useState("")
  return (
    <div className='Pinapp'>
    <Pin 
    length={4}
     setOtpHandler={(value)=>{setOtp(value)}}
     >
     </Pin>
     <h3>OTP value is  {otp}</h3>
    </div>
  )
}

export default Showinputapp