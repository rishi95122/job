"use client"
import React, { useEffect, useState } from 'react'
import styles from "./single.module.css"
import Link from 'next/link'
const SingleJob = ({params}) => {
 const [job,setJob]=useState()
    const fetchSinglePost=async()=>{
        const data =await fetch(`/api/jobs/getsinglejob/${params.id}`)
            const res= await data.json()
            setJob(res)
            console.log(res)
    }
    useEffect(()=>{
fetchSinglePost()
    },[])

  return (
    <div className={styles.container}>
        <div className={styles.detailscontainer}>
            <h1>{job?.title}</h1>
            <div className={styles.jobcontainer}>
                <span>{job?.type}</span>
                <span>{job?.experience}</span>
            </div>
            <p className={styles.date}>{job?.createdAt.toString().slice(0,10)}</p>
            <div className={styles.jobdetails}>
            <h2>Job details</h2>
            <p>{job?.jobdetails}</p>
       
            </div>
            <div className={styles.requirements}>
                <h2>Requirements</h2>
                {
                  job?.requirements&&  job?.requirements?.split("•").slice(1).map((item,idx)=>{
                        return  <p key={idx}>•{item}</p>
                    })
                }
            </div>
            <Link href={job?.link||""} > <button>Apply here</button></Link>
           </div>
    </div>
  )
}

export default SingleJob

