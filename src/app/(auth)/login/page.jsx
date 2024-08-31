
import React, {  } from 'react'
import style from './login.module.css'

import LoginForm from '@/components/clients/LoginForm'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

const Login = async() => {

 const session = await auth()
  if(session?.user) redirect("/")

  return (
    <div className={style.logincontainer}>
    <h2>Login</h2>
   <LoginForm />
</div>
  )
}

export default Login