import mongoose from "mongoose";

export const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string,{})
        console.log(`MongoDB connected ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error to connected to mongoDB: ${error}`);
        process.exit()
    }
}
