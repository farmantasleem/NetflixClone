import {
    Button,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    HStack,
    Text,
    Center,
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
import { ListCard } from "../Component/ListCard";
import { getMyList } from "../redux/actions";
  
  export const Mylist = () => {
    const[status,setstatus]=useState(false)
    const state=useSelector((state)=>state.state);
    const[front,setfront]=useState({
        poster:"",
        title:"",
        decription:"",
        genres:["",""]
    })
    const dispatch=useDispatch()
    useEffect(()=>{
      if(state.mylist.length>0){
        setfront(state.mylist[0].movie||{})
      }
      dispatch(getMyList())
      console.log(state)
    },[state])
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
          <Center minH="100%" hidden={!state?.mylist?.length<1}>
            <Text color="white">Sorry, you don't have a favourite movie or tv-show yet.</Text>
          
          </Center>
          
      (
  
        {
          status?<ReactVideoPlayer setstatus={setstatus}/>:(
            <Stack
            hidden={state?.mylist?.length<1}
            m="auto"
         position={"absolute"}
            maxW="490px"
            bottom={"100px"}
            direction="column"
            color="white"
            left="50px"
            textAlign={"left"}
          >
            <Heading fontSize={"59px"}>{front?.title}</Heading>
            <HStack>
              <Button onClick={()=>{setstatus(true)}} minW={{base:"120px",md:"180px"}}  bgColor="red" color="white" leftIcon={<AiFillPlayCircle />}>
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
            {front?.decription}
            </Text>
          </Stack>
          )
        }
    
        </Container>
        <Container hidden={state?.mylist?.length<1} minW="89%" p="20px">
          <Heading pb="20px" pt="20px" color="white" fontSize={"30px"}>
           My List
          </Heading>
          <SimpleGrid
       columns={{base:1,md:3}}
       gap="20px"
       justifyContent={"center"}
       justifyItems={"center"}
          >
            {
              state?.mylist?.map((e,i)=>{
              
                  return <ListCard data={e.movie} listid={e._id} updateFront={setfront}  setstatus={setstatus}/>
          
              
              })
            }
          </SimpleGrid>
        </Container>
  
      </Container>
    );
  };
  