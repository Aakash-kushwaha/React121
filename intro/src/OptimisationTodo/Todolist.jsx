import React from 'react'

const Todolist = ({title,status}) => {
  return (
    <>
    <div style={{display:"flex",gap:"1rem"}}>
      <div>{title}</div>
      <div>{status==true?"true":"false"}</div>

    </div>
    </>)
}

export default Todolist