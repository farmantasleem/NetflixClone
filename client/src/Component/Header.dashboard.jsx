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
           <NavLink to="/dashboard"> <Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}> Home</Button>    </NavLink>
            <NavLink to={"/tvseries"}>    <Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>TV Series</Button> </NavLink>   
           <NavLink to="/movies"> <Button bgColor="transparent" _hover={{bgColor:"black",color:"white"}}>Movies</Button>  </NavLink>
            <NavLink to="/new"><Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>New & Popular</Button> </NavLink>
         <NavLink to="/mylist">   <Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>My List</Button> </NavLink>
                </Stack>  
              <NavLink to="/">  <BiLogOutCircle color="red" fontSize="33px" cursor="pointer"></BiLogOutCircle>    </NavLink>
           
        </Stack>
    )
}