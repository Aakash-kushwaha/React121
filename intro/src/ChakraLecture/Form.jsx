import { Box, Button, Heading, Stack ,Input, PinInput, PinInputField, HStack, Text} from '@chakra-ui/react'
import React from 'react'

const Form = () => {
    const [loading,SetLoading]= React.useState(false)
    const [otp,setOtp]= React.useState("")
  return (
    <Box >
        <Heading>Form</Heading>
        <Stack w={"md"} m={"auto"}>
            <Input placeholder="Email"></Input>
            <Input placeholder="password"></Input>
            <Box>
            <Box>
    <HStack >
  <PinInput value={otp} onChange={(v)=>setOtp(v)}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
            </Box>
            <Text>{otp}</Text>
            <Button w={"5rem"}
             border="1 px solid red"
              isLoading={loading} 
              onClick={()=>{SetLoading(true); setInterval(()=>{SetLoading(false)},2000)}}
              bg={`Primarycolors.color1`}
              >submit</Button>
            </Box>
          
        </Stack>
    </Box>
  )
}

export default Form