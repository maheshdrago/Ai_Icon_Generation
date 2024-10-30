import axios from "axios";
import { refreshToken } from "./auth";
const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3MzAyNjQ5OTgsImV4cCI6MTczMDM1MTM5OH0.GiqejAnTJ0wFHqoskfT1HIMHPQarB6h8XlKtIiI6Cd0"

const axiosInstance = axios.create({
    
    baseURL: "http://localhost:3000/api/",
    withCredentials:true,
    headers: {
        "Authorization":`Bearer ${apiToken}`
      }
})

axiosInstance.interceptors.response.use(response => response, async (err) => {
    const originalRequest = err.config
    originalRequest._retry = true;

    try{
        if(err.response && err.response.status == 401 && err.response.data.errorCode==4002){
            const token = await refreshToken()
            originalRequest.headers["Authorization"] = `Bearer ${token}`

            return axiosInstance(originalRequest)
        }
    }
    catch(e){
        console.log(e, "Token refresh failed")
        
        return Promise.reject(err)
    }
    return Promise.reject(err)
  })

export default axiosInstance;