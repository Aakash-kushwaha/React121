import React from 'react'
import { Box, ChakraProvider, Container, extendTheme } from '@chakra-ui/react'
import Form from './Form'
import Layouts from './Layouts'

const colors ={
 Primarycolors:{
        color1:"#EE6352",
        color2:"#59CD90",
        color3:"#3FA7D6",
        color4:"#FAC05E",
        color5:"#F79D84"
    }
}


const theme = extendTheme({colors})

const Showchakraapp = () => {
  return (
    <ChakraProvider theme={theme}>
        {/* <Container border="1px solid red" maxWidth="2xl">Box</Container> */}
        {/* <Form></Form> */}
        <Layouts></Layouts>
    </ChakraProvider>
  )
}

export default Showchakraapp