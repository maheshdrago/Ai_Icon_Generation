import { Router, Request, Response } from "express";
import authRouter from "./authRouter";


const rootRouter: Router = Router()

rootRouter.get("/", (req:Request, res:Response) => {
    res.send("Root Router");
})

rootRouter.use("/auth", authRouter)

export default rootRouter