import { GETDATA } from "./actionType"

export const getData=()=>{
    return async(dispatch)=>{
        const data=await fetch("https://netflix-h7qa.onrender.com/movie");
        const resp=await data.json();
        dispatch({type:GETDATA,payload:resp.data})
    }
}