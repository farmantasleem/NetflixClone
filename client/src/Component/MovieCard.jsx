import { Center, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import movies from "../assests/dashboard2.jpg"
import {AiFillPlayCircle} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
export const MovieCard=()=>{
    const[hide,setside]=useState(true)
    return(
        <Stack bgImage={movies} direction="column" justifyContent={"left"} onMouseEnter={()=>{setside(false)}} onMouseLeave={()=>{setside(true)}} height="300px" width="400px" bgSize={"cover"}>
        
      <VStack hidden={hide} m="auto" justifyContent={"left"}>
  
            <HStack fontSize="29px" color="white">
                <AiFillPlayCircle></AiFillPlayCircle>
            <BiAddToQueue></BiAddToQueue>
            <BsFillInfoCircleFill/>
            </HStack>
                <Heading color="white" >Lucifer</Heading>
                <Text>Animation |  Comedy | Family</Text>
      </VStack>
     
        </Stack>
    )
}