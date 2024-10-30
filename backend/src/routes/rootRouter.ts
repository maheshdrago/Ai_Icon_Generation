import { Router, Request, Response } from "express";
import authRouter from "./authRouter";
import imageRouter from "./imageGenRouter";


const rootRouter: Router = Router()

rootRouter.use("/auth", authRouter)
rootRouter.use("/image", imageRouter)

export default rootRouter