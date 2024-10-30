import axiosInstance from "./axiosInstance"

export const refreshToken = async () => {
    const response = await axiosInstance.get("/auth/refreshAccessToken", {
        withCredentials: true
    })
    const token = response.data.access_token
    console.log(token)
    return token
}