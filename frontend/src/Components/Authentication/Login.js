import React from 'react'
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useState } from 'react';
import { FaRegEye ,FaEyeSlash } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios'

const Login = () => {
  const[email , setEmail] = useState('')
  const[ password, setPassword] = useState('')
  const [show  , setShow] = useState(false);
  const toast = useToast();
  const [loading , setLoading] = useState(false);
  const history = useHistory();



  const handleClick =()=>{
    setShow(!show);
  }



  
  const submitHandler =async()=>{

    setLoading(true);
    if(!email||!password){
      toast({
        title: 'fill all fields',
        position : 'bottom',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });

      setLoading(false);
      return;
    }

    try{

      const config = {
        headers : {
          "content-type" : "application/json",
        },
      };

      const {data} = await axios.post(
        "/api/user/login", {email,password},
        config
      );

      toast({
        title: 'Login Succesfull',
        position : 'bottom',
        status: 'succes',
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem("userInfo" , JSON.stringify(data))
      setLoading(false);
      history.push("/chat")

    }catch(error){
      toast({
        title: 'Error Occured',
        description:error.response.data.message,
        position : 'bottom',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setLoading(false)
    }

  }

  return (


    <VStack>
       <FormControl id = "email" isRequired>
        <FormLabel >Email</FormLabel>
         <Input placeholder='Enter your Email' 
         value={email}
         onChange={(e) => setEmail(e.target.value)}/>

      </FormControl>
       
      <FormControl id = "password" isRequired>
        <FormLabel >Password</FormLabel>
         <InputGroup>
         <Input  type={show?'text' : 'password'} 
           placeholder='Enter your Password'
            value={password}
           onChange={(e) => setPassword(e.target.value)}/>
         <InputRightElement marginLeft= '2px'>
         <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaRegEye /> :<FaEyeSlash />  }
            </Button>
         </InputRightElement>
         </InputGroup>

      </FormControl>

      <Button 
     colorScheme='blue'
     width={"100%"}
     style={{marginTop:15}}
     onClick={submitHandler}
     isLoading= {loading}
     >
      Login
     </Button>

     <Button 
     colorScheme='red'
     variant={"solid"}
     width={"100%"}
     style={{marginTop:15}}
     onClick={()=>{setEmail("guest@123.com");
       setPassword("12345678");
    }}
     >
       Guest User Credentials
     </Button>
    
    </VStack>
    
  )
}

export default Login