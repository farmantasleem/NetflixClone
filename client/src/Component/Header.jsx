import { Button, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png"
export const Header=()=>{
    return (
        <Stack p="20px" direction={"row"}  justifyContent="space-between" minW="100%" >
            <Image width="200px" src={logo}/>            
        <NavLink to={"/dashboard"}>   <Button height={"40px"} fontSize="19px" width="160px" bgColor="rgb(229,9,20)" color={"white"}>Sign In</Button></NavLink>
        </Stack>
    )
}