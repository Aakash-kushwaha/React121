import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Products.module.css"


const Productdetails = () => {
  const [details,setDetails]= React.useState({})
  const {id} = useParams()
  console.log(id)

  React.useEffect(()=>{
    axios({
      url:`http://localhost:3000/food/${id}`,
      method:"GET",
    }).then((res)=>setDetails(res.data))
  },[])

  console.log(details)
  return (
    <div className={styles.detailscontainer}>
    <div className={styles.detailsdivimg}>
      <img className={styles.proimg} src={details.image}></img>
     
    </div>
    <div>
    <p>{details.name}</p>
    <p>{details.cuisine}</p>
    <p>cost {details.cost}</p>
    <p>min cost {details.minPrice}</p>
    {/* <p>Payment Method {details.paymentMethod.data}</p> */}
    <p>Ratings {details.rating}</p>
    <p>Reviews {details.reviews}</p>
    <p>Votes {details.votes}</p>
    </div>
   
    </div>
  )
}

export default Productdetails