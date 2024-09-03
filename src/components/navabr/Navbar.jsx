
import React from 'react'
import styles from './Navbar.module.css'

import Links from './Links';
import { auth } from '@/lib/auth';
import { MdOutlineWork } from "react-icons/md";
import Link from 'next/link';
const Navbar = async() => {
  const session = await auth()

  return (
    <div className={styles.container}>
        <div className={styles.logocontainer}>
          <Link href={"/"}>
          <h1><MdOutlineWork /></h1>
          </Link>
            
           
              <Links user={session?.user}/>
           
        </div>
    </div>
  )
}

export default Navbar