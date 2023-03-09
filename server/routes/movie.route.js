const express=require("express");
const mongoose=require("mongoose");
const MovieModel = require("../model/MovieModel");
const movieRoute=express.Router();


//get all series/movie/netflix original data

movieRoute.get("/:category",async(req,res)=>{
    const category=req.params.category||"movie"
    try{
        const allMovieData=await MovieModel.find({category})
        res.status(200).send({data:allMovieData})

    }
    catch(err){
        res.status(404).send({msg:err.message})
    }
})
movieRoute.get("/",async(req,res)=>{
   
    try{
        const allMovieData=await MovieModel.find()
        res.status(200).send({data:allMovieData})

    }
    catch(err){
        res.status(404).send({msg:err.message})
    }
})


module.exports={movieRoute}