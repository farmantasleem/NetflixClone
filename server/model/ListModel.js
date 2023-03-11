const mongoose=require("mongoose");

const MylistSchema=mongoose.Schema({
        user:{type:mongoose.Types.ObjectId,required:true,ref:'user'},
        movie:{type:mongoose.Types.ObjectId,required:true,ref:'movie'}
})

const MylistModel=mongoose.model("mylist",MylistSchema);

module.exports=MylistModel