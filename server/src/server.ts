import express from "express";
import dotenv from "dotenv"
import {chats} from "../data/data"
import cors from "cors";

dotenv.config()

const app = express()
const port = process.env.PORT||5000

app.use(cors());


app.get("/",async(req,res)=>{
    res.send("Hello World!")
})

app.get("/api/chat",async(req,res)=>{
    res.send(chats)
})

app.listen(port,()=>{
    console.log("Server runnig on port: " + port)
}) 