import mongoose from "mongoose";

const user= new mongoose.Schema({
    username:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        trim:true
    },
    password:{
        type: String,
        required:true,
        trim:true
    }
})

const jobs= new mongoose.Schema({
    title:{
        type: String,
        required:true,
        trim:true
    },
    type:{
        type: String,
        required:true,
        trim:true
    },
    experience:{
        type: String,
        required:true,
        trim:true
    },
    img:{
        type: String,
       
        trim:true
    },
    jobdetails:{
        type: String,
       
        trim:true
    },
    requirements:{
        type: String,
       
        trim:true
    },
    link:{
        type: String,
       required:true,
        trim:true
    },
   
},{timestamps:true})

export const userSchema= mongoose.models?.User || mongoose.model("User",user)
export const jobsSchema= mongoose.models?.jobs || mongoose.model("jobs",jobs)