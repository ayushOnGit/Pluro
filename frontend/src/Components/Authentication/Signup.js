import React from 'react'
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useState } from 'react';
import { FaRegEye ,FaEyeSlash } from "react-icons/fa";
import { useToast } from '@chakra-ui/react'

const Signup = () => {
  const[name , setName] = useState('')
  const[email , setEmail] = useState('')
  const[ password, setPassword] = useState('')
  const [show  , setShow] = useState(false);
  const[confirmpassword , setConfirmpassword] = useState()
  const [loading , setLoading] = useState(false)
  const[pic , setPic] = useState();
  const toast = useToast();
  
  const handleClick =()=>{
    setShow(!show);
  }

  const postDetails = (pics)=>{


    setLoading(true);
    if(pics === undefined){
      toast({
        title: 'please select an image',
        position : 'bottom',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })

      return ;
    }

    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "pluro-app");
      data.append("cloud_name", "dmu2iihmh");
    
      
      const apiUrl = `https://api.cloudinary.com/v1_1/dmu2iihmh/image/upload?api_key=173524773573671&api_secret=6ELu5IovZokEabzI8zcxiCtHXCE`;
    
      fetch(apiUrl, {
        method: "POST",
        body: data,
      })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    } else {
       
    }
    
  }

  const submitHandler =()=>{
    toast({
      title: 'please select an image',
      position : 'bottom',
      status: 'warning',
      duration: 5000,
      isClosable: true,
    })
  }

  console.log(name)
  return (
    <VStack spacing="5px">
      <FormControl id = "first-name" isRequired>
        <FormLabel >Name</FormLabel>
         <Input placeholder='Enter your Name' onChange={(e) => setName(e.target.value)}/>

      </FormControl>

      <FormControl id = "email" isRequired>
        <FormLabel >Email</FormLabel>
         <Input placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)}/>

      </FormControl>
       
      <FormControl id = "password" isRequired>
        <FormLabel >Password</FormLabel>
         <InputGroup>
         <Input  type={show?'text' : 'password'} 
           placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)}/>
         <InputRightElement marginLeft= '2px'>
         <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <FaRegEye /> :<FaEyeSlash />  }
            </Button>
         </InputRightElement>
         </InputGroup>

      </FormControl>

      <FormControl id = "Confirm password" isRequired>
        <FormLabel >Confirm Password</FormLabel>
         <InputGroup>
         <Input  type={show?'text' : 'password'} 
           placeholder='Enter your Password' onChange={(e) => setConfirmpassword(e.target.value)}/>
        
         </InputGroup>

      </FormControl>

      <FormControl>
        <FormLabel>
          Upload Image
        </FormLabel>

        <Input type='file' p ={1.5} accept= "image/*" onChange={(e)=> postDetails(e.target.files[0])}/>
      </FormControl>

     <Button 
     colorScheme='blue'
     width={"100%"}
     style={{marginTop:15}}
     onClick={submitHandler}
     isLoading={loading}
     >
      Sign UP
     </Button>
      


    </VStack>
  )
}

export default Signup