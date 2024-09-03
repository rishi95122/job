

import style from './job.module.css'
import Jobcard from '@/components/jobcard/Jobcard'
import Link from 'next/link'



const Jobs = async({}) => {
  const res= await fetch("http://localhost:3000/api/jobs/getjob",{cache:"no-cache"})
  const jobs= await res.json()
  console.log(jobs)
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