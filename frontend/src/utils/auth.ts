import axiosInstance from "./axiosInstance"

export const refreshToken = async () => {

    try{
        const response = await axiosInstance.get("/auth/refreshAccessToken", {
            withCredentials: true
        })
        const token = response.data.access_token
        return token
    }
    catch(err){
        throw err
    }
    
}