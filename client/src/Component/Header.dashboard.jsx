import { Button, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import logo from "../assests/logo.png"
import {BiLogOutCircle} from "react-icons/bi"
import { NavLink } from "react-router-dom";
export const HeaderDashboard=()=>{
    return (
        <Stack zIndex={2} p="20px" direction={"row"}  justifyContent="space-between" color="white" minW="100%" >
            <Stack direction={"row"} gap="10px" >
            <Image width="150px" src={logo}/>  
            <Button bgColor="transparent"> Home</Button>    
            <Button bgColor="transparent">TV Series</Button>    
            <Button bgColor="transparent">Movies</Button>  
            <Button bgColor="transparent">New & Popular</Button> 
            <Button bgColor="transparent">My List</Button> 
                </Stack>  
              <NavLink to="/">  <BiLogOutCircle color="red" fontSize="33px" cursor="pointer"></BiLogOutCircle>    </NavLink>
           
        </Stack>
    )
}