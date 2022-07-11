import React from 'react'
import useCustom from './Custom'

const Showcustom = () => {

  
    // React.useEffect(()=>{
    //   window.addEventListener("scroll",handlescroll)

    //   return ()=>{
    //     window.removeEventListener("scroll",handlescroll)
    //   }
    // },[])


    const value = useCustom(1,3000)
  return (
    <div>
    {value}
    </div>
  )
}

export default Showcustom