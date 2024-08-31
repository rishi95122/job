import { connectDb } from "@/utils/mongo"
import { jobsSchema } from "@/utils/schema"
import { NextResponse } from "next/server"

export const GET=async(response)=>{
    try {
        connectDb()
        const jobs= await jobsSchema.find().sort({ createdAt: -1 })
       
        if(!jobs) throw new Error("An error while fetching")
            return NextResponse.json(jobs)
    } catch (error) {
        throw new Error(error);
        
    }
}