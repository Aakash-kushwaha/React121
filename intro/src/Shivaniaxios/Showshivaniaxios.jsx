import React from 'react';
import axios from 'axios'

export default function Showshivaniaxios(){
  
React.useEffect(()=>{
  console.log('hee')
 axios.post('https://reqres.in/api/login',{ email: "eve.holt@reqres.in",password:"shivani"})
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
},[])
   // Make a request for a user with a given ID

  
   // .then(function () {
   //   // always executed
   // });
 

  return(
    // const axios = require('axios').default;

    <>
    <h4>shiva</h4>
    </>
  )
}
