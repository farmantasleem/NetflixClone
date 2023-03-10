import { Button, Container } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import {DefaultPlayer as Video } from "react-html5video"
import intro from "../assests/intro.mp4"
import 'react-html5video/dist/styles.css'
const ReactVideoPlayer=()=>{

    return(
        <Container zIndex={1} ml="40px" justifySelf={"center"} position={"absolute"} top='80px'  p="0px" bgColor="black" justifyContent={"center"} minW={{base:"80%",md:"95%"}} maxW={{base:"80%",md:"95%"}} onClick={()=>{}}>
            <Video  > 
                <source id="data"  src={intro} type="video/webm"/>
            </Video>
        
        </Container>
    )
}

export default ReactVideoPlayer;