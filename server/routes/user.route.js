const express=require("express");
const UserModel =require("../model/UserModel")
const bcrypt=require("bcryptjs")
const userRoute=express.Router()  
const jwt=require("jsonwebtoken")



//User login
userRoute.post("/login",async(req,res)=>{
  const {email,password}=req.body;
  if(email&&password){
        try{
            const userData=await UserModel.findOne({email});
            if(userData?.name.length>0){
                //user password
                //hashed password
                const isMatch=await bcrypt.compare(password,userData.password);

                if(isMatch){

                    //token 
                    const token=jwt.sign({"userid":userData._id},process.env.JWT)
                    res.status(200).send({msg:"Login Success",token:token,role:userData.role})

                }else{
                    res.status(400).send({"msg":"Wrong Password"})
                }


            }else{
                res.status(404).send({"msg":"No Account Found"})
            }

        }catch(err){
            res.status(400).send({"msg":err.message})
        }
  }else{
    res.status(400).send({"msg":"Email & password required"})
  }
})


//Signup

userRoute.post("/signup",async(req,res)=>{
    const {name,email,password}=req.body;

    if(name&&email&&password){
        try{   
            const hashed_password=await bcrypt.hash(password,12)
            const newUser=await UserModel({...req.body,password:hashed_password})

            await newUser.save();

            res.status(200).send({"msg":"Signup Successfull"})
        }catch(err){
            res.status(500).send({msg:err.message})
        }
    }else{
        res.status(400).send({msg:"Validation Failed"})
    }
})

module.exports={userRoute}