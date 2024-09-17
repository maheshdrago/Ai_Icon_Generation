import { Router, Request, Response } from "express";

const authRouter:Router = Router()

authRouter.get("/login", (req:Request, res:Response) => {
    res.send("login")
})

export default authRouter;