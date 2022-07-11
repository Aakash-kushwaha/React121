import React, {forwardRef} from 'react'


// you cant pass ref just like that as a prop you gotta use forwardRef()

const Pinitem = forwardRef(({index,inputref,handleChange,onBackspaceHandler},ref) => {

    const handleKeyup=(e)=>{
        if(e.keyCode===8){
            // debugger; is a tool use to debug the code just put anywhere you want to debug and call that fucntion 
            onBackspaceHandler(e)
        }else{
            handleChange(e)
        }
    }
  return (
    <>
        {
   
 <input 
        ref={ref}
         key={index} 
         maxLength={1}
         onKeyUp={handleKeyup}

         >

        </input>
       }

    </>
  )
})

export default Pinitem