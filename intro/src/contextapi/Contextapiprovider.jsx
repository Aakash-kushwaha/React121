import React from 'react'


export const ThemeContext = React.createContext();

const Contextapiprovider = ({children}) => {
  const [theme,setTheme] = React.useState("light")

  const toggle=()=>{
    theme==="light"?setTheme("dark"):setTheme("light")
  }

  return (
  <ThemeContext.Provider value={[theme,toggle]} >
   {children}
  </ThemeContext.Provider>
  )
}

export default Contextapiprovider