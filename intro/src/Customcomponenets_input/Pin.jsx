import React, { useRef } from 'react'
import Pinitem from './Pinitem'


const Pin = ({length,setOtpHandler}) => {
    // console.log(onChange,"eln")
    const inputref = useRef([])
    const [input] = React.useState(new Array(length).fill(1))
    const [inputBoxvalue,SetInputBoxvalue]= React.useState(new Array(length).fill(""))

    console.log(inputref.current)

    const handleChange=(e,index)=>{

   inputBoxvalue[index]=e.target.value
        SetInputBoxvalue(inputBoxvalue)
        
        if(index<length-1 && e.target.value) inputref.current[index + 1].focus()

        setOtpHandler(inputBoxvalue.join(""))
        
    }

    const onBackspaceHandler=(e,index)=>{
        if(index>0) inputref.current[index - 1].focus()


        inputBoxvalue[index]=e.target.value
        SetInputBoxvalue(inputBoxvalue)
        setOtpHandler(inputBoxvalue.join(""))
    }

  return (
    <div >
    {
       input.map((input,index)=>{
        return   <Pinitem 
        key={index} 
        handleChange={(e)=>handleChange(e,index)}
        onBackspaceHandler={(e)=>onBackspaceHandler(e,index)}
        ref={(element)=>{ 
       inputref.current[index]= element
         }}
         
         ></Pinitem>
       })
    }
    </div>
  )
}

export default Pin