import React from 'react'
import axios from 'axios'

const Crickapicheck = () => {
    React.useEffect(()=>{
 //all matches
        axios.get("https://api.cricapi.com/v1/matches?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0")
// all PLayers info
        // axios.get("https://api.cricapi.com/v1/players?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0")
//all serreis infor
        // axios.get("https://api.cricapi.com/v1/series_info?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0&id=47b54677-34de-4378-9019-154e82b9cc1a")
// all match info
        // axios.get("https://api.cricapi.com/v1/match_info?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0&id=820cfd88-3b56-4a6e-9dd8-1203051140da")
        
// current matches 
        // axios.get("https://api.cricapi.com/v1/currentMatches?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0")

     

        .then((res)=>console.log(res,"crick"))
    },[])
  return (
    <div>Crickapicheck</div>
  )
}

export default Crickapicheck