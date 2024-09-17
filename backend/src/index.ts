import express, {Express} from "express";
import rootRouter from "./routes/rootRouter";

const app:Express = express()
const PORT: number = 3000

app.use("/api", rootRouter)

app.listen(PORT, ()=>console.log(`Started on port ${PORT}`))