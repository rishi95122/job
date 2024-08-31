"use client"
import React, { useState } from 'react'
import styles from './addjob.module.css'
import AddJobForm from '@/components/clients/addjob/AddJobForm';
const Addjob = () => {
 
  return (
    <div className={styles.container}>
            <div className={styles.Formcontainer}>
         <AddJobForm />
            </div>
    </div>
  )
}

export default Addjob