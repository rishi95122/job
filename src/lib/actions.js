 "use server"
import { CredentialsSignin } from "next-auth"
import { signIn, signOut } from "./auth"
import { connect } from "mongoose"
import { connectDb } from "@/utils/mongo"
import { jobsSchema } from "@/utils/schema"

export const LoginHandler=async(username, password)=>{
   
      
        try{
          await signIn("credentials",{
            username,
            password
          })
        }
        catch(err){
        
     return err.cause
        }
}
  
  export const handleLogout =async()=>{
  await signOut()
   }

   export const addJobHandler=async(title,jobType,experience,jobdetails,requirements,link)=>{

    try { 
          connectDb()
          const job=await jobsSchema.create({
            title,type:jobType,experience,jobdetails,requirements,link
          })
          if(!job) throw new Error("there is an error")
          
        return { status: 200, msg: "Added"}

      } catch (error) {
       console.log(error)
      }
   }