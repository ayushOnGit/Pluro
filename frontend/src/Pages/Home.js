import React from 'react'
import {Container , Box , Text, Center} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Authentication/Login'
import Signup from '../Components/Authentication/Signup'


const Home = () => {
  return (
    
    <Container>
      <Box 
      d='flex'
      justifyContent= 'center'  p ={3} bg="white" w="100%" m ="40px 0 15px 0" borderRadius= "lg" borderWidth='1px'
      >
     <Text textAlign='center'fontWeight= "" fontSize='4xl' fontFamily= "work sans" color="black">PLURO</Text>
      </Box >

      <Box d='flex'
      justifyContent= 'center'  p ={3} bg="white" w="100%" m ="40px 0 15px 0" borderRadius= "lg" borderWidth='1px'>
  

  <Tabs variant='soft-rounded' colorScheme='blue' color={'black'}>
  <TabList mb = "1em">
    <Tab width={'50%'}>Login</Tab>
    <Tab width={'50%'}>Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login/>
    </TabPanel>
    <TabPanel>
     <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
 
  )
}

export default Home

 