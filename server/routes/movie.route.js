const express=require("express");
const mongoose=require("mongoose");
const MovieModel = require("../model/MovieModel");
const movieRouter=express.Router();


//get all series/movie/netflix original data

movieRouter.get("/:category",async(req,res)=>{
    const category=req.params.category||"movie"
    try{
        const allMovieData=await MovieModel.find({category})
        res.status(200).send({data:allMovieData})

    }
    catch(err){
        res.status(404).send({msg:err.message})
    }
})


