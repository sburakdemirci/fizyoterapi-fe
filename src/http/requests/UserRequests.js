import axios from "axios";
import { ENDPOINT_BASE_URL } from "../Config";

 const userRegister = (data,responseFn,errorFn) =>{

    const axiosHeaders = ()=>{
        return{       
            "Content-Type":"application/json",
            Accept: "application/json"
        }
    }
    axios({
        method:"POST",
        url:ENDPOINT_BASE_URL+"/signUp",
        headers:axiosHeaders(),
        data:data
    })
    .then(response =>{
        responseFn(response)
    }).catch(error =>{
        errorFn(error)
        //errorNotify yazılacak error handling için
    })
} 
