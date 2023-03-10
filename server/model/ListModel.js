const mongoose=require("mongoose");

const MylistSchema=mongoose.Schema({
        user:{type:mongoose.Types.ObjectId,required:true},
        movie:{type:mongoose.Types.ObjectId,required:true}
})

const MylistModel=mongoose.model("mylist",MylistSchema);

module.exports=MylistModel