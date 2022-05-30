import axios from 'axios'
import React from 'react'

const initialstate={
  loading:true,
  error: false,
  data:null
}

const Githubactions={
  "fetch":"fetch",
  "sucess":"success",
  "failure":"failure"
}

function reducer(state,action){
    switch(action.type){
  
     case Githubactions.fetch:{
       console.log("helo")
       return {
            ...state,
            loading:true,
            error:false,
            data:null
       }
     }
     case Githubactions.sucess:{
      console.log("helo")
       return ({
             ...state,
             loading:false,
             error:false,
             data:action.payload
       })
     }
     case Githubactions.failure:{
       return {
        ...state,
        loading:false,
        error:true,

       }
     }
     default:
       return state
    }
}

const Showuser = () => {

  const [{loading,error,data},dispatch] = React.useReducer(reducer,initialstate)
  React.useEffect(()=>{

    dispatch({
      type:Githubactions.fetch
    })

    axios({
      url:"https://fakestoreapi.com/products",
      method:"GET",
      // params:{
      //   q:"masai"
      // }
    }).then((res)=>{
    console.log(res,"res");
     dispatch({
       type:Githubactions.sucess,
       payload:res.data
     })
    }).catch((err)=>{
  console.log(err)
      dispatch({
        type:Githubactions.failure
      })
    })
    console.log(data,"data")
  },[])




  return (



    <div>
{
  loading&&<div> ...loading</div>
}
{
  error&&<div>...error</div>
}
{/* {
  data?.map((el)=>{
  return  <div key={el.id}>{el.login}</div>
  })
} */}
    </div>
  )
}

export default Showuser