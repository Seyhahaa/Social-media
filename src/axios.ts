import axios from "axios";
import { base_url } from "./base_url";

const getToken = () =>{
    return localStorage.getItem('token');
}

const axiosInstance = axios.create({
    baseURL: base_url,
  });
  axiosInstance.interceptors.request.use(function (config:any){
    config.headers.Authorization  = 'Bearer ' + getToken();
    return config;
  })
export {axiosInstance};