import { Box, Heading, SimpleGrid, useColorMode ,Button } from '@chakra-ui/react'
import {MoonIcon,SunIcon} from "@chakra-ui/icons"
import React from 'react'

const Layouts = () => {
    const items = new Array(12).fill(0).map((e,i)=>i+1)
    const {colorMode,toggleColorMode}= useColorMode()
    console.log(colorMode,"cljsdf")
  return (
    <Box>
  <Button onClick={()=>toggleColorMode(!colorMode)}> {colorMode==="light"?<MoonIcon></MoonIcon>:<SunIcon></SunIcon>}</Button>

    {/* // every chkra compnent have some bsic responsive code like tailwind which you can exces by 
    columns={[base,sm,md,lg,xl]}
    columns={[1,2,3,4,5]} 
    spacing={[2,4,6,9]}  
    or b making breaking points  */}
    <Heading mb={"2rem"}>responsive by giving para as array</Heading>

<SimpleGrid columns={[1,2,3,4,5]} spacing={[2,4,6,9]}>
{
    items.map((e,i)=>{
        return <Box key={i} border={"1px solid black"}>{e}</Box>
    })
}
</SimpleGrid>

<Heading mt={"3rem"} mb={"2rem"}>responsive by making break points</Heading>

<SimpleGrid columns={{
    base:1,
    sm:2,
    md:3,
    lg:4,
    xl:5,
}} spacing={[2,4,6,9]}>
{
    items.map((e,i)=>{
        return <Box key={i} border={"1px solid black"}>{e*2}</Box>
    })
}
</SimpleGrid>
    </Box>
  )
}

export default Layouts