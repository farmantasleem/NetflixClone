import { Center, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import movies from "../assests/dashboard2.jpg"
import {AiFillPlayCircle} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"
import {Link as Scroll} from "react-scroll"
import { Info } from "./Info";
export const MovieCard=({data={},updateFront,setstatus})=>{
    const[hide,setside]=useState(true)
    return(
        <Stack  style={{
            boxShadow: "inset 0px 0px 50px rgb(20,20,20)",
          }} borderRadius={"10px"}  bgImage={data?.poster||movies} direction="column" justifyContent={"left"}  onMouseEnter={()=>{setside(false)}} onMouseLeave={()=>{setside(true)}} height="220px" minW={{base:"90%",md:"380px"}} maxW={{base:"90%",md:"380px"}} bgSize={"cover"}>
        
      <VStack hidden={hide} transition="2" m="auto" justifyContent={"left"}>
  
            <HStack fontSize="29px" color="white">
             <Scroll to="home" spy={true} smooth={true} offset={-100} duration={500}>   <AiFillPlayCircle cursor={"pointer"} color="red" onClick={
                ()=>{updateFront((st)=>{
                    setstatus(false)
                    return data})} 
                }></AiFillPlayCircle></Scroll>
            <BiAddToQueue cursor={"pointer"} updateFront={updateFront} setstatus={setstatus}></BiAddToQueue>
            <Info data={data}/>
            </HStack>
                <Heading color="white" width="100%" textAlign={"center"} >{data?.title||"Lucifer"}</Heading>
                <Text color="white">{data?.genre?.join(" | ")||"Animation |  Comedy | Family"}</Text>
      </VStack>
     
        </Stack>
    )
}