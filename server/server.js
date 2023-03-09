const express=require("express");
const cors=require("cors");
const {connectDatabase} = require("./config/db");
const {movieRoute} = require("./routes/movie.route");
const app=express()
require("dotenv").config()

app.use(cors())
app.use("/movie",movieRoute)

app.get("/hell",(req,res)=>{
    res.send({msg:"hi Form hell"})
})
const PORT=process.env.PORT||8081
app.listen(PORT,()=>{
    console.log("Server started")
    try{
        connectDatabase()
        console.log("Db Connected")

    }catch(err){
        console.log("err",err)
    }
   
})