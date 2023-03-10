const jwt=require("jsonwebtoken")
const Authentication=async(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1];
    if(token){
        const decoded=await jwt.verify(token,process.env.JWT)
        if(decoded?.userid.length>0){
            req.body.userid=decoded.userid;
            next()
        }else{
            res.status(404).send({"msg":"token Exprired"})
        }
    }else{
        res.status(404).send({"msg":"User is not Authenticated",token})
    }
}

module.exports={Authentication}