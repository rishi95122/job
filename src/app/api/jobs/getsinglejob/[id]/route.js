import { connectDb } from "@/utils/mongo"
import { jobsSchema } from "@/utils/schema"
import { NextResponse } from "next/server"

export const GET=async(req,{params})=>{
    console.log(params.id)
  try {
  connectDb()
  const singleJob= await jobsSchema.findById(params?.id.toString())
console.log(singleJob)
  return NextResponse.json(singleJob)
  } catch (error) {
throw new Error(error);

  }
}