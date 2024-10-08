"use client"
import React, { useState } from 'react'
import styles from './addjob.module.css'
import { addJobHandler } from '@/lib/actions';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
const AddJobForm = () => {
    const [image, setImage] = useState(null);
  const router =useRouter()
    const handleImageChange = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
    };
  return (
    <form className={styles.jobForm} action={async(Formdata)=>{
      console.log(Formdata)  
        const title =  Formdata.get("title")
        const jobType =  Formdata.get("jobType")
        const experience =  Formdata.get("experience")
        const jobdetails =  Formdata.get("jobdetails")
        const requirements =  Formdata.get("requirements")
        const link =  Formdata.get("link")
    const res=  await addJobHandler(title,jobType,experience,jobdetails,requirements,link)
    if(res)
    router.push("/jobs")
    }}>
    <div className={styles.formGroup}>
      <label htmlFor="image">Upload Image</label>
      <input
        type="file"
        name="file"
        id="image"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.input}
      />
      {image && <Image width={100} height={100} src={image} alt="Uploaded" className={styles.previewImage} />}
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="title">Job Title</label>
      <input
        type="text"
         name="title"
        id="title"
        placeholder="Enter job title"
        required
        className={styles.input}
      />
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="jobType">Job Type</label>
      <select id="jobType"  name="jobType" required className={styles.input}>
      
        <option value="Internship">Internship</option>
        <option value="Full-time">Full-time</option>
      </select>
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="experience">Experience</label>
      <select id="experience"  name="experience" required className={styles.input}>
        <option value="Freshers">Freshers</option>
        <option value="1 years">1 years</option>
        <option value="2 years">2 years</option>
        <option value="3 year">3 years</option>
        <option value="4 year">4 years</option>
        <option value="5 years">5 years</option>
      </select>
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="jobdetails">Job Details</label>
      <input
        type="text"
         name="jobdetails"
        id="jobdetails"
        placeholder="Enter job details"
        required
        className={styles.input}
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="Requierments">Requierments</label>
      <textarea
        type="text"
         name="requirements"
        id="Requierments"
        placeholder="Enter Requirements"
        required
        
        className={styles.input}
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="link">Refer Link</label>
      <input
        type="text"
         name="link"
        id="link"
        placeholder="Enter Link"
        required
        className={styles.input}
      />
    </div>


    <button type="submit" className={styles.submitButton}>Submit</button>
  </form>
  )
}

export default AddJobForm