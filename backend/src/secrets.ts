import dotenv from "dotenv"


dotenv.config({path:".env"})

export const PORT = process.env.PORT
export const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY as string
export const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY as string