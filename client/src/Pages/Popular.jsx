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
import { Info } from "../Component/Info";
  
  export const Popular = () => {
    const[status,setstatus]=useState(false)
    const state=useSelector((state)=>state.state);
    const[front,setfront]=useState({
      title:"Stranger Things",
      genre:[],
      poster:"https://occ-0-3350-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608",
      description:"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
    })
    useEffect(()=>{
      console.log(state)
    })
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
          height={"640px"}
          bgImage={status?"":front.poster}
          bgSize="cover"
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
              <Button onClick={()=>{setstatus(true)}} minW="180px" bgColor="red" color="white" leftIcon={<AiFillPlayCircle />}>
                Play
              </Button>
              <Button
                bgColor="rgb(96,94,90)"
                color="white"
                minW="180px"
               
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
            templateColumns={"400px 400px 400px"}
            gap="20px"
            justifyContent={"center"}
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
            templateColumns={"400px 400px 400px"}
            gap="20px"
            justifyContent={"center"}
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
            templateColumns={"400px 400px 400px"}
            gap="20px"
            justifyContent={"center"}
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
  