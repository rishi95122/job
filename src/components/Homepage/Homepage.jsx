import React from 'react'
import style from './homepage.module.css'
import { auth } from '@/lib/auth'
const Homepage = async() => {

  return (
    <div className={style.container}>
        <div className={style.details}>
        <h1 className={style.h1}>Welcome to JOB Seeker</h1>
        <button className={style.btn}>Get Started</button>
        </div>
           
    </div>
  )
}

export default Homepage