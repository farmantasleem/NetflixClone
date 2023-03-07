import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HeaderDashboard } from "../Component/Header.dashboard";
import dashboard from "../assests/dashboard2.jpg";
import { MovieCard } from "../Component/MovieCard";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ReactVideoPlayer from "../Component/ReactVideoPlayer";
export const Dashboard = () => {
  const[status,setstatus]=useState(false)
  return (
    <Container minW="100%" minH="880px" p="0px" bgColor="rgb(20,20,20)">
      <Container
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
        bgImage={status?"":dashboard}
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
          <Heading fontSize={"59px"}>Lucifer</Heading>
          <HStack>
            <Button onClick={()=>{setstatus(true)}} minW="180px" bgColor="red" color="white" leftIcon={<AiFillPlayCircle />}>
              Play
            </Button>
            <Button
              bgColor="rgb(96,94,90)"
              color="white"
              minW="180px"
              leftIcon={<BsFillInfoCircleFill />}
            >
              Info
            </Button>
          </HStack>
          <Text fontSize={"19px"}>
            Bored an unhappy as the Lord of Hell, Lucifer Morningstar abandoned
            his throne and retired to Los Angeles, where he has teamed with LAPD
            detectiv...
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
          <MovieCard />
          <MovieCard />
          <MovieCard />
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
          <MovieCard />
          <MovieCard />
          <MovieCard />
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
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </SimpleGrid>
    )
      </Container>
    </Container>
  );
};
