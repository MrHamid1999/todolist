import axios from "axios";

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:8000/" : "" ;

export const baseRequest =  axios.create({
    baseURL : baseUrl,
    timeout : 5000 , 
})

