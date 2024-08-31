import mongoose from "mongoose";
const connection={}
export const connectDb=async()=>{

    try {
        if(connection.isConnected)
            {
                return;
            }
        const db= await mongoose.connect(process.env.MONGO_ID)
        connection.isConnected=db.connections[0].readyState
    } catch (error) {
        throw new Error(error)
    }
}