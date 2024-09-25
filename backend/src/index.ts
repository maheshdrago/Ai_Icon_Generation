import express, {Express} from "express";
import rootRouter from "./routes/rootRouter";
import { PrismaClient } from "@prisma/client";
import { ErrorMiddleware } from "./middleware/errorMiddleware";

const app:Express = express()
const PORT: number = 3000
export const prismaClient = new PrismaClient({
    log:["query"]
})

app.use(express.json())
app.use("/api", rootRouter)

app.use(ErrorMiddleware)

app.listen(PORT, ()=>console.log(`Started on port ${PORT}`))