import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import { HeaderDashboard } from "../Component/Header.dashboard";
import dashboard from "../assests/dashboard2.jpg"
import { MovieCard } from "../Component/MovieCard";
export const Dashboard=()=>{
    return (
        <Container minW="100%" minH="880px" p="0px" bgColor="rgb(20,20,20)"> 
           
            <Container  className="border" style={{
                boxShadow:"inset 0px 0px 300px rgb(20,20,20)"
            }} p="0px"  borderBottom={"10px"} borderBottomColor="red" minW="100%" height={"640px"}  bgImage={dashboard} bgSize="cover">
            <HeaderDashboard/>
            </Container>
            <Stack>
                <MovieCard/>
                <MovieCard/>
            </Stack>
        </Container>
    )
}