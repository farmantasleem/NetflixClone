const express=require("express");
const cors=require("cors");
const connectDatabase = require("./config/db");
const movieRouter = require("./routes/movie.route");
const app=express()
require("dotenv").config()

app.use(cors())
app.use("/movie",movieRouter)

app.listen(8081,async()=>{
    console.log("Server started")
    try{
        await connectDatabase()
        console.log("Db Connected")

    }catch(err){
        console.log("err",err)
    }
   
})