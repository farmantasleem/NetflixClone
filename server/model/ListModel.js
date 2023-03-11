const mongoose=require("mongoose");

const MylistSchema=mongoose.Schema({
        user:{type:mongoose.Types.ObjectId,ref:"user",required:true},
        movie:{type:mongoose.Types.ObjectId,ref:"movie",required:true}
})

const MylistModel=mongoose.model("mylist",MylistSchema);

module.exports=MylistModel