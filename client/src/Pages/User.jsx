import {Checkbox, Center, Container,FormControl,FormLabel,FormErrorMessage, FormHelperText,Input,Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Header } from "../Component/Header";
import { loginUser, signupUser } from "../redux/actions";


const User = () => {
  const [userData,setuserData]=useState({
      email:"",
      password:"",
      name:""
  })
  const auth=useSelector((state)=>state.state.auth);
  const toast=useToast()

  const dispatch=useDispatch()
  const handleLogin=()=>{
      dispatch(loginUser(userData,toast))
  }

  const handleRegister=()=>{
    dispatch(signupUser(userData,toast))

  }
const navigate=useNavigate()
  useEffect(()=>{
    if(auth){
    navigate("/dashboard")
    }
  },[auth])
  return (
    <Container bgColor={"black"} minW="100%" minH={"800px"}>
        <Header/>
    <Center minH="100%">
    <Tabs margin={"40px"} minH={{md:"400px"}}  minW={{md:"400px"}} borderRadius="10px" maxW="400px" bgColor="white" padding={"20px"}>
  <TabList>
   <HStack minW="100%" justifyContent={"center"}> <Tab>LOGIN</Tab>
    <Tab>REGISTER</Tab>
   </HStack>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Center >
      <VStack>
      <FormControl gap={"20px"}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="Password" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
          <Checkbox mt="20px" defaultChecked>Remember me</Checkbox>
          <Button mt="30px" minW="100%" bgColor="rgb(229,9,20)" color="white" onClick={handleLogin}>LOGIN</Button>
          </FormControl>
      </VStack>

        
      
      </Center>
    </TabPanel>
    <TabPanel>
    <Center>
        <FormControl>
        <FormLabel>Name</FormLabel>
          <Input type="text" value={userData.name} onChange={(e)=>{setuserData({...userData,name:e.target.value})}}/>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="text" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
          
          
          <Button mt="30px" minW="100%" color="white" bgColor={"rgb(229,9,20)"} onClick={handleRegister}>REGISTER</Button>
        
        </FormControl>
      </Center>
    </TabPanel>
 
  </TabPanels>
</Tabs>
    </Center>
      
    </Container>
  );
};

export default User