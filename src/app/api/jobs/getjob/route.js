import { connectDb } from "@/utils/mongo"
import { jobsSchema } from "@/utils/schema"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
    let q={};
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type')
    if(type) q.type = type
    console.log(q)
    try {
        connectDb()
        const jobs= await jobsSchema?.find(q)?.sort({ createdAt: -1 })
       
        if(!jobs) throw new Error({error:"An error while fetching"})
            return NextResponse.json(jobs)
    } catch (error) {
        throw new Error(error);
        
    }
}