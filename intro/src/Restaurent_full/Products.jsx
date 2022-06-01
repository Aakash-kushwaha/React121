import React from 'react'
import axios from "axios"
import styles from "./Products.module.css"
import {Link} from "react-router-dom"
import Search from './Search'
import Sort from './Sort'

const getdata=()=>{
 

  return  axios("http://localhost:3000/food",{
        method:"GET",
        }
     )
    
}


const Productdetails = () => {
   
    const [data,setData]= React.useState([])

    React.useEffect(()=>{

    getdata().then((res)=>{setData(res.data)})

    .catch((err)=>console.log(err))

    },[])

    console.log(data)
  return (<>
  <Search></Search>
  <Sort></Sort>
    <div className={styles.productcontainer}>
      {
         data.map((el)=>{
            return <div className={styles.product} key={el.id}>
                 <img width="200px" src={el.image}></img>
                 <p>{el.name}</p> 
                 <p>{el.cost}</p>
               <Link to={`/products/${el.id}`}>See more</Link>
             </div>
         })
      }
    </div>
</>)
}

export default Productdetails