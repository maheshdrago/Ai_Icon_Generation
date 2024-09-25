import { Router, Request, Response } from "express";
import { login, signup } from "../controllers/auth";


const authRouter:Router = Router()

authRouter.post("/login", login)
authRouter.post("/signup", signup)

export default authRouter;