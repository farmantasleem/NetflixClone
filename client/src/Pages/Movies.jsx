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
  import { useSelector } from "react-redux";
  import rrr from "../assests/rrr1.JPG"
import { Info } from "../Component/Info";
  
  export const Movies = () => {
    const[status,setstatus]=useState(false)
    const state=useSelector((state)=>state.state);
    const[front,setfront]=useState({
      title:"RRR (Hindi)",
      genre:[],
      poster:rrr,
      description:"A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India"
    })
    useEffect(()=>{
      console.log(state)
    },[])
    return (
      <Container minW="100%" minH="880px" p="0px" bgColor="rgb(20,20,20)">
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
            maxW="490px"
            bottom={"100px"}
            direction="column"
            color="white"
            left="50px"
            textAlign={"left"}
          >
            <Heading fontSize={"59px"}>{front.title}</Heading>
            <HStack>
              <Button onClick={()=>{setstatus(true)}}minW={{base:"120px",md:"180px"}}  bgColor="red" color="white" leftIcon={<AiFillPlayCircle />}>
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
            <Text fontSize={"19px"}>
            {front.description||front.decription}
            </Text>
          </Stack>
          )
        }
    
        </Container>
        <Container minW="89%" p="20px">
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
                if(i>12){
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
  