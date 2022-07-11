import React from 'react'
import Searchbar from './component/Searchbar'


const Showsearchbar = () => {
    const [query,setQuery]= React.useState("")
    const [loading,setLoading]= React.useState(false)
    const [suggestion,setSuggestion]= React.useState([])
  return (
    <div>
  <Searchbar></Searchbar>
  </div>
  )
}

export default Showsearchbar