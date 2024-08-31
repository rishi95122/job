"use client"
import { LoginHandler } from '@/lib/actions'
import React from 'react'
import style from './login.module.css'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router=useRouter()
  return (
    <form className={style.form} action={async(FormData)=>{
      const username =  FormData.get("username")
      const password =  FormData.get("password")
     const error =  await LoginHandler(username,password)
     if(!error) { toast("Login successfull")

       router.refresh()
     }
      else{
     toast(error)}

      }}>
          <div className={style.inputgroup}>
              <label htmlFor="username">Username</label>
              <input  type="text" id="username" name="username" required />
          </div>
          <div className={style.inputgroup}>
              <label htmlFor="password">Password</label>
              <input  type="password" id="password" name="password" required />
          </div>
          <button className={style.button} type="submit">Login</button>
      </form>
  )
}

export default LoginForm