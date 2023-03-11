import React from "react";

import {Route,Routes} from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard";
import { Home } from "../Pages/Home";
import { Movies } from "../Pages/Movies";
import { Mylist } from "../Pages/Mylist";
import { Popular } from "../Pages/Popular";
import { Tvseries } from "../Pages/Tvseries";
import User from "../Pages/User";
export const AllRoutes=()=>{
    return(
        <Routes>
    <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/movies" element={<Movies/>} />
            <Route path="/new" element={<Popular/>} />
            <Route path="/tvseries" element={<Tvseries/>} />
            <Route path="/mylist" element={<Mylist/>}/>
            <Route path="/user" element={<User/>}/>
            
        </Routes>
    )
}