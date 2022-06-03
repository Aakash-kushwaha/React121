import React from 'react'
import axios from "axios"
import styles from "./Products.module.css"
import {Link} from "react-router-dom"
import Search from './Search'
import Sort from './Sort'

const getdata=(price,q)=>{

  

  return  axios("http://localhost:3000/food",{
        method:"GET",
        params:{
          _sort:"cost",
      _order:price,
      q
        }
        }
     )
    
}


const Productdetails = () => {
   
    const [data,setData]= React.useState([])
    const [price,setprice]= React.useState("")
    const [search,setsearch]= React.useState("")
    const [q,setq]= React.useState("")
    React.useEffect(()=>{
    

    getdata(price,q).then((res)=>{setData(res.data)})

    .catch((err)=>console.log(err))

    },[price,q])

    console.log(data)
  return (<>
  <Search setq={setq} search={search} setsearch={setsearch}></Search>
  <Sort price={price} setprice={setprice}></Sort>
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