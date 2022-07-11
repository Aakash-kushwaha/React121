import React, { useRef } from 'react'

const useThrottle = (func,delay) => {
const throttleid = useRef(false)
 React.useEffect(()=>{
    if(!throttleid.current){
        throttleid.current = true
      setTimeout(()=>{
        func()
        throttleid.current = true
        },delay)
    }
 },[])
}

export default useThrottle