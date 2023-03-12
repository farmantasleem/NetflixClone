import { ADDLIST, ALLLIST, GETDATA, LOGINSUCCESS, REMOVELIST } from "./actionType"

export const getData=()=>{
    return async(dispatch)=>{
        const data=await fetch("https://netflix-h7qa.onrender.com/movie");
        const resp=await data.json();
        dispatch({type:GETDATA,payload:resp.data})
    }
}

export const addtolist=(data,toast)=>{
    return async(dispatch)=>{
        const data2=await fetch(`https://netflix-h7qa.onrender.com/movie/addlist/${data._id}`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${localStorage.getItem("TOKEN")}`
            }
        });
        toast({
            description: "Added to List",
        })
        dispatch(getMyList())
     
    }
}

export const removeList=(id,toast)=>{
    return async(disptach)=>{
        const data2=await fetch(`https://netflix-h7qa.onrender.com/movie/list/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",
                "authorization":`bearer ${localStorage.getItem("TOKEN")}`
            }
        });
        toast({
            description: "Removed From List",
        })
       disptach({type:REMOVELIST,payload:id})
    }
}
export function loginUser(data,toast){
    return async function (dispatch,getState){
          try{
            const sendData=await fetch("https://netflix-h7qa.onrender.com/user/login",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })
            const resp=await sendData.json();
            if(resp?.token?.length>10){
                localStorage.setItem("TOKEN",resp.token)
                toast({
                    title: 'Login Success',
                 
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                localStorage.setItem("role",resp?.role)
                dispatch({type:LOGINSUCCESS})
            }else{
                toast({
                    title: 'Login Failed',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
             
            }
            
          }catch(err){
            toast({
                title: 'Login Failed',
             
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        
          }
    }
}

export function signupUser(data,toast){
    return async function (dispatch,getState){
          try{
            const sendData=await fetch("https://netflix-h7qa.onrender.com/user/signup",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })
            const resp=await sendData.json();
            console.log(resp)
            toast({
                title: 'SignUp Successfull',
             
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
          }catch(err){
            toast({
                title: 'Signup Failed',
             
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
          
          }
    }
}

export const removeFromList=(id)=>{
    return  async()=>{
        const deleteList=await fetch(`https://netflix-h7qa.onrender.com/movie/list/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json","authentication":`bearer ${localStorage.getItem("TOKEN")}`},
        
        })
    }
}

export const getMyList=()=>{
    return async(dispatch)=>{
        const data=await fetch("https://netflix-h7qa.onrender.com/movie/list/all",{
            method:"GET",
            headers:{"authorization":`bearer ${localStorage.getItem("TOKEN")}`}
        });
        const resp=await data.json();
        console.log(resp)
        dispatch({type:ALLLIST,payload:resp.data||[]})
    }
}

