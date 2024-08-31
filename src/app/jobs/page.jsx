"use client"
import React, { useEffect, useState } from 'react'
import style from './job.module.css'
import Jobcard from '@/components/jobcard/Jobcard'
import Link from 'next/link'



const Jobs = () => {
  const [jobs,setJobs]=useState()
  useEffect(()=>{
   const fetchData=async()=>{
    try {
      const res= await fetch("/api/jobs/getjob")
      const data= await res.json()
      setJobs(data)
    
    } catch (error) {
      
    }
   }

   fetchData()
  },[])
  return (
    <div className={style.container}>
      <div className={style.jobContainer}>
      {
        jobs?.map((item,idx)=>{

          return  <Link  style={{width:"100%"}} key={idx} href={`/jobs/${item._id}`}> <Jobcard    item={item} index={idx}/></Link>
        })
      }  
      </div>
   
    </div>
  )
}

export default Jobs