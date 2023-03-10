const mongoose=require("mongoose");
const bcrypt=require("bcryptjs")
const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            min: [4, "Name should have more than 4 characters"],
        },
        email:{
            type:String,
            required:true,
            minLength: [6, "Not Valid email"],
            unique:true
        },
        password:{
            type:String,
            required:true
        },

        memberType:{
            type:String,
            default:"user"
        }
})



const UserModel=mongoose.model("user",userSchema)

module.exports=UserModel