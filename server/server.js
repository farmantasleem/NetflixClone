const express=require("express");
const cors=require("cors")
const app=express()

app.use(cors())

app.listen(8081,()=>{
    console.log("Server Started on port no 8081")
})