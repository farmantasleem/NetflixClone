import React from "react";
import {HStack ,Drawer,Heading, DrawerBody,Button, DrawerFooter,DrawerHeader,DrawerOverlay,  DrawerContent, DrawerCloseButton, VStack, useDisclosure,  } from '@chakra-ui/react'
import {BsFillCartFill} from "react-icons/bs"
import {RiMenu3Line} from "react-icons/ri"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
import { LOGOUTUSER } from "../redux/actionType";
function NavbarMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const state=useSelector((state)=>state.state)
    const dispatch=useDispatch()
 
    return (
      <>
        <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
          <RiMenu3Line/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader bgColor="red" color="white">NETFLIX.</DrawerHeader>
  
            <DrawerBody bgColor={"#141414"}>
              <VStack color="white">
              <NavLink to="/dashboard"> <Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}> Home</Button>    </NavLink>
            <NavLink to={"/tvseries"}  >    <Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>TV Series</Button> </NavLink>   
           <NavLink to="/movies"  > <Button bgColor="transparent" _hover={{bgColor:"black",color:"white"}}>Movies</Button>  </NavLink>
            <NavLink to="/new" ><Button bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>New & Popular</Button> </NavLink>
         <NavLink to="/mylist"  >   <Button  bgColor="transparent"  _hover={{bgColor:"black",color:"white"}}>My List</Button> </NavLink>
         <NavLink    to="/" >  <BiLogOutCircle onClick={()=>{dispatch({type:LOGOUTUSER})}} color="red" fontSize="33px" cursor="pointer"></BiLogOutCircle>    </NavLink>
          
          
              </VStack>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default NavbarMobile