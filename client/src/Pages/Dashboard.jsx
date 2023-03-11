import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HeaderDashboard } from "../Component/Header.dashboard";
import dashboard from "../assests/dashboard2.jpg";
import { MovieCard } from "../Component/MovieCard";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ReactVideoPlayer from "../Component/ReactVideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { Info } from "../Component/Info";
import { getData } from "../redux/actions";

export const Dashboard = () => {
  const[status,setstatus]=useState(false)
  const dispatch=useDispatch()
  const state=useSelector((state)=>state.state);
  const[front,setfront]=useState({
    title:"Lucifer",
    genre:[],
    poster:dashboard,
    description:"Bored an unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed with LAPD detectiv..."
  })
  useEffect(()=>{
    console.log(state)
    dispatch(getData())
  },[])
  return (
    <Container minW="100%" maxW="100%" overflow={"hidden"} minH="880px" p="0px" bgColor="rgb(20,20,20)">
      <Container
      id="home"
        justifyItems={"center"}
        className="border"
        style={{
          boxShadow: "inset 0px 0px 300px rgb(20,20,20)",
        }}
        position="relative"
        p="0px"
        borderBottom={"10px"}
        borderBottomColor="red"
        minW="100%"
        maxW={{base:"80%",md:"100%"}}
        height={"640px"}
        bgImage={status?"":front.poster}
        bgSize={{base:"cover",md:"cover"}}
        bgPosition={{base:"right",md:"left"}}
      >
        <HeaderDashboard />
        
    (

      {
        status?<ReactVideoPlayer setstatus={setstatus}/>:(
          <Stack
          m="auto"
       position={"absolute"}
          maxW={{base:"80%",md:"490px"}}
          bottom={"100px"}
          direction="column"
          color="white"
          left="50px"
          textAlign={"left"}
        >
          <Heading fontSize={{base:"39px",md:"59px"}}>{front.title}</Heading>
          <HStack>
            <Button onClick={()=>{setstatus(true)}} minW={{base:"120px",md:"180px"}} bgColor="red" color="white" leftIcon={<AiFillPlayCircle />}>
              Play
            </Button>
            <Button
                bgColor="rgb(96,94,90)"
                color="white"
                minW={{base:"120px",md:"180px"}}
               
              >
                <Info data={front}/>
              </Button>
          </HStack>
          <Text fontSize={{base:"15px",md:"19px"}}>
          {front.description||front.decription}
          </Text>
        </Stack>
        )
      }
  
      </Container>
      <Container minW={{base:"100%",md:"89%"}} p="20px">
        <Heading pb="20px" pt="20px" color="white" fontSize={"30px"}>
          Top Rated on Netflix
        </Heading>
        <SimpleGrid
         
          columns={{base:1,md:3}}
          gap="20px"
          justifyContent={"center"}
          justifyItems={"center"}
        >
          {
            state?.movie?.map((e,i)=>{
              if(i<3){
                return <MovieCard updateFront={setfront} data={e} setstatus={setstatus}/>
              }
            
            })
          }
        </SimpleGrid>
      </Container>

      <Container minW="89%" p="20px">
        <Heading pb="20px" pt="20px" color="white" fontSize={"30px"}>
          Trending Now
        </Heading>
        <SimpleGrid
         columns={{base:1,md:3}}
         gap="20px"
          justifyContent={"center"}
          justifyItems={"center"}
        >
                 {
            state?.movie?.map((e,i)=>{
              if(i>=3 && i<6){
                return <MovieCard updateFront={setfront} data={e} setstatus={setstatus}/>
              }
            
            })
          }
        </SimpleGrid>
      </Container>

      <Container minW="89%" p="20px">
        <Heading pb="20px" pt="20px" color="white" fontSize={"30px"}>
          Netflix Originals
        </Heading>
        <SimpleGrid
        columns={{base:1,md:3}}
        gap="20px"
          justifyContent={"center"}
          justifyItems={"center"}
        >
           {
            state?.movie?.map((e,i)=>{
              if(i>=6 && i<9){
                return <MovieCard updateFront={setfront} data={e} setstatus={setstatus}/>
              }
            
            })
          }
        </SimpleGrid>
    )
      </Container>
    </Container>
  );
};
