import React from 'react'
import styles from './Slider.module.css'
import Link from 'next/link'
import { MdClose } from "react-icons/md";
const Slider = ({user,setMenu,menu}) => {
  return (
    <div className={`${styles.conatiner} ${!menu ? styles.closed :''}`}>
        <MdClose onClick={()=>setMenu(false)} className={styles.close} size={40}/>
         <div className={styles.navlinks}>
        <Link className={styles.navlink} href="/jobs">
          Jobs
        </Link>
        <Link className={styles.navlink} href="/freshers">
          Freshers Jobs
        </Link>
        {user && (
          <Link className={styles.navlink} href="/addjob">
            Add Job
          </Link>
        )}
      </div>
    </div>
  )
}

export default Slider