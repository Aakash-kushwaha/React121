import React from 'react'
import styled from "styled-components"

const Searchbar = () => {
  return (
    <Searchbarwraper>
        <Image src="https://flyclipart.com/thumb2/search-icons-283914.png" alt=""></Image>
        <Input></Input>
        <Rightside>
            <Image src="https://www.freeiconspng.com/uploads/close-icon-47.png"></Image>
        </Rightside>
    </Searchbarwraper>
  )
}

export default Searchbar

const Searchbarwraper = styled.div`
border:1px solid black;
width:50%;
display:"flex";
border-radius:5px;
margin:auto;
align-items:center
`
const Image = styled.img`
width:20px;
padding-right:20px
`

const Input = styled.input`
${'' /* border:none; */}
outline:none;
flex:1;
fontsize:20px
`

const Rightside = styled.div`

`