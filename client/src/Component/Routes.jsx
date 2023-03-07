import React from "react";

import {Route,Routes} from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard";
import { Home } from "../Pages/Home";
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
           
        </Routes>
    )
}