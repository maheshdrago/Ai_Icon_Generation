import { Router } from "express";
import { generateImage } from "../controllers/imageGen";
import { accessMiddleware } from "../middleware/accessMiddleware";


const imageRouter = Router()

imageRouter.post("/generate",accessMiddleware, generateImage)

export default imageRouter