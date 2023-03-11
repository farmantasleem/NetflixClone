import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assests/logo.png"
import {BiLogOutCircle} from "react-icons/bi"
import { NavLink } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import { useDispatch } from "react-redux";
import { LOGOUTUSER } from "../redux/actionType";
export const HeaderDashboard=()=>{
    const dispatch=useDispatch()
    return (
     
            <Stack maxW={"100%"} overflow="hidden" zIndex={2} p="20px" direction={"row"}  justifyContent="space-between" color="white" minW="100%" >
                <Stack minW={"100%"}  direction={"row"} display={{base:"flex",md:"none"}} justifyContent="space-between">
                <Image width="150px" src={logo}/>  
                    <NavbarMobile/>
                </Stack>
            <Stack direction={"row"} display={{base:"none",md:"flex"}} gap="10px">
            <Image width="150px"   src={logo}/>  
           <NavLink to="/dashboard"> <Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}> Home</Button>    </NavLink>
            <NavLink to={"/tvseries"}  >    <Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>TV Series</Button> </NavLink>   
           <NavLink to="/movies"  > <Button bgColor="transparent" _hover={{bgColor:"black",color:"white"}}>Movies</Button>  </NavLink>
            <NavLink to="/new" ><Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>New & Popular</Button> </NavLink>
         <NavLink to="/mylist"  >   <Button  bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>My List</Button> </NavLink>
                </Stack>  
             <Stack display={{base:"none",md:"flex"}} > <NavLink    to="/" >  <BiLogOutCircle  onClick={()=>{dispatch({type:LOGOUTUSER})}} color="red" fontSize="33px" cursor="pointer"></BiLogOutCircle>    </NavLink></Stack>
           
        </Stack>
        
    )
}