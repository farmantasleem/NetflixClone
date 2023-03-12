import { ADDLIST, ALLLIST, GETDATA, LOGINSUCCESS, LOGOUTUSER, REMOVELIST } from "./actionType";


const initialState={auth:localStorage.getItem("TOKEN")?true:false,movie:[{title:"The Godfather",genre:["Comedy"],description:"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",poster:"https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=1280&h=720"}],series:[],popular:[],mylist:[]}

const reducer=(oldState=initialState,action)=>{
    const {type,payload} = action;
    switch (type) {
        case GETDATA:
            return {...oldState,movie:payload}
            break;
        case ADDLIST:
            return { ...oldState,mylist:[...oldState.mylist]}
        case REMOVELIST:
            let newArray=oldState.mylist.filter((e,i)=>{return e._id!==payload})    
            return {...oldState,mylist:[...newArray]}

        case LOGINSUCCESS:
            return {...oldState,auth:true} 
            
        case ALLLIST:
            return {...oldState,mylist:payload}   

        case LOGOUTUSER:
            localStorage.removeItem("TOKEN")
            return {...oldState,auth:false}   
        default:
           return  oldState
            break;
    }
}


export default reducer;