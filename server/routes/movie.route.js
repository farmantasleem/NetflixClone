const express=require("express");
const mongoose=require("mongoose");
const { Authentication } = require("../middlewares/Authentication");

const MylistModel = require("../model/ListModel");
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


movieRoute.post("/addlist/:id",Authentication,async(req,res)=>{
    const movieId=req.params.id;
    const userid=req.body.userid;
    try{
        const newMovie=await MylistModel({movie:movieId,user:userid})
        await newMovie.save();
        res.status(200).send({msg:"added to list successfully"})
    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

movieRoute.get("/list/all",Authentication,async(req,res)=>{
    const userId=req.body.userid;
    console.log(userId)
    try{
        const allList=await MylistModel.find({user:userId}).populate("movie");
        res.status(200).send({data:allList})

    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

movieRoute.delete("/list/:id",Authentication,async(req,res)=>{
    const listId=req.params.id;
    const userId=req.body.userid

    try{
        const movieTobeDeleted=await MylistModel.findOneAndDelete({user:userId,_id:listId})
        res.status(200).send({msg:"Removed from successfully"})

    }catch(err){
        res.status(404).send({msg:err.message})
    }
})

module.exports={movieRoute}