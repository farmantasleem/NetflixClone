import { Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import movies from "../assests/dashboard2.jpg"
export const MovieCard=()=>{
    const[hide,setside]=useState(true)
    return(
        <Stack bgImage={movies} onMouseEnter={()=>{setside(false)}} onMouseLeave={()=>{setside(true)}} height="400px" width="400px" bgSize={"contain"}>
            <Heading hidden={hide}>Lucifer</Heading>
        </Stack>
    )
}