import React from 'react'

const useCustom = (value,delay) => {
// const [dvalue,SetDvalue] = React.useState(value)
 React.useEffect(()=>{

    let newdebounce = setTimeout(()=>{
        // setDvalue(dvalue+5)
     value = value+5
    },delay)
 
    return ()=>{
        clearTimeout(newdebounce)
    }

 },[value])

//  return dvalue
 return value


}

export default useCustom