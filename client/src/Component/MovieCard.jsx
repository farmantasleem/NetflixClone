import { Center, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import movies from "../assests/dashboard2.jpg"
import {AiFillPlayCircle} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
export const MovieCard=()=>{
    const[hide,setside]=useState(true)
    return(
        <Stack borderRadius={"10px"}  bgImage={movies} direction="column" justifyContent={"left"}  onMouseEnter={()=>{setside(false)}} onMouseLeave={()=>{setside(true)}} height="220px" width="400px" bgSize={"cover"}>
        
      <VStack hidden={hide} transition="2" m="auto" justifyContent={"left"}>
  
            <HStack fontSize="29px" color="white">
                <AiFillPlayCircle cursor={"pointer"} color="red"></AiFillPlayCircle>
            <BiAddToQueue cursor={"pointer"}></BiAddToQueue>
            <BsFillInfoCircleFill cursor={"pointer"}/>
            </HStack>
                <Heading color="white" >Lucifer</Heading>
                <Text color="white">Animation |  Comedy | Family</Text>
      </VStack>
     
        </Stack>
    )
}