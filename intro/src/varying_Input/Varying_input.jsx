import React from "react";

const Varying_input = () => {
    const [data,setData]= React.useState({})
  const [State, setState] = React.useState([]);
  const [map,setMap]= React.useState(false)
  console.log(data, "data");
//   console.log(data,"initdata")
  console.log("init");
  const handleSubmit = () => {
    setMap(true)
  };

  const handleChange=(e)=>{
         console.log(e.target.value,"value",e.target.name)
       setData({
        ...data,
        [e.target.id]:e.target.value
       })
  }

  const handleAdd = () => {
    let H2 = () =>
      React.createElement("input", {
        placeholder: "Enter something",
        className: "inputbox",
        id: `input${State.length}`,
        // onChange: handleChange,
      });
    setState([...State,H2]);
  };

  const handleSub = () => {
    State.pop();
    setState([...State]);
  };

 
  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleSubmit}>Submit</button>
      <div className="box">
      <div onChange={handleChange}>
        {State.map((El, index) => {
          return (
            <div key={index}>
              <El></El>
            </div>
          );
        })}
        </div>
        <div>
        {
     map &&   data&&
        Object.keys(data).map((el, index) => {
          return (
            <div  key={index}>
              {  data[el]  }
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Varying_input;
