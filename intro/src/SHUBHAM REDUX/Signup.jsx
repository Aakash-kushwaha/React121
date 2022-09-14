import axios from "axios";
import React from "react";

const Signup = () => {
  const [otp, setotp] = React.useState("");
  const [data, setData] = React.useState({});
  const [getotp,setGetotp]= React.useState("") 

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendotp=()=>{
    axios.post("http://localhost:8080/getotp",data)
    .then((res)=>{console.log(res.data);setGetotp(res.data)})
    .catch((err)=>console.log(err,"err"))
  }

  const Signup = (e) => {
    e.preventDefault();


    if(Number(otp)!==getotp){
        return  alert("otp is not correct")
    }else{
        alert("go to log in page")
        axios.post("http://localhost:8080/signup",data)
        .then((res)=>{console.log(res.data);setGetotp(res.data)})
        .catch((err)=>console.log(err,"err"))
    }




    // axios.post()
  };

  return (
    <form onSubmit={Signup}>
      <input placeholder="email" onChange={handleChange} name="email"></input>
      <br></br>
      <input
        placeholder="password"
        onChange={handleChange}
        name="password"
      ></input>
       <br></br>
      <button onClick={sendotp}>Send otp</button>
      <br></br>
      <input
        placeholder="Enter otp"
        onChange={(e) => setotp(e.target.value)}
      ></input>
       <br></br>
      <input type="submit" value="signup"></input>
    </form>
  );
};

export default Signup;
