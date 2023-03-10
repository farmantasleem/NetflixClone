import { ADDLIST, GETDATA, REMOVELIST } from "./actionType"

export const getData=()=>{
    return async(dispatch)=>{
        const data=await fetch("https://netflix-h7qa.onrender.com/movie");
        const resp=await data.json();
        dispatch({type:GETDATA,payload:resp.data})
    }
}

export const addtolist=(data,toast)=>{
    return async(disptach)=>{
        const data2=await fetch("https://netflix-h7qa.onrender.com/movie");
        toast({
            description: "We've created your account for you.",
        })
       disptach({type:ADDLIST,payload:data})
    }
}

export const removeList=(id,toast)=>{
    return async(disptach)=>{
        const data2=await fetch("https://netflix-h7qa.onrender.com/movie");
        toast({
            description: "We've created your account for you.",
        })
       disptach({type:REMOVELIST,payload:id})
    }
}