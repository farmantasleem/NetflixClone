const mongoose=require("mongoose");

const MovieSchema=mongoose.Schema({
    title:{required:true,type:String,unique:true},
    genre:{type:Array,required:true},
    description:{type:String,required:true},
    releasedate:{type:String,required:true},
    lang:{type:String,default:"English"},
    poster:{type:String,required:true},
    category:{type:String,default:"movie"}
})

const MovieModel=mongoose.model("movie",MovieSchema);

module.exports=MovieModel