import express from "express";
import dotenv from "dotenv"
import {chats} from "./data/data"
import cors from "cors";
import { connectDb } from "./config/db";
import userRoutes from "./routes/userRuter"
import { errorHandler, notFound } from "./middleware/errorMiddleware";
dotenv.config()
connectDb()

const app = express()
const port = process.env.PORT||5000
app.use(cors());
app.use(express.json())

app.use("/api/user",userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server runnig on port: ${port}`)
}) 