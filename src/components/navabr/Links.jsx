"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import styles from "./Navbar.module.css";
import { handleLogout } from "@/lib/actions";
import { TiThMenuOutline } from "react-icons/ti";
import Slider from "../slider/Slider";
const Links = ({ user }) => {
  const [mode, setMode] = useState(true);
  const [menu, setMenu] = useState(false);
  console.log(user);
  useEffect(() => {
    mode
      ? document.body.setAttribute("theme", "dark")
      : document.body.setAttribute("theme", "light");
  }, [mode]);

  return (
    <div className={styles.navlinksContainer}>
      <div className={styles.navlinks}>
        <Link className={styles.navlink} href="/">
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

      <div className={styles.rightsection}>
        <div
          onClick={() => {
            setMode(!mode);
          }}
        >
          {mode ? (
            <BsFillSunFill style={{ color: "yellow" }} size={25} />
          ) : (
            <RiMoonClearFill size={25} />
          )}
        </div>

        {user && (
          <form action={handleLogout}>
            <button className={styles.navlink}>Logout</button>
          </form>
        )}
          <TiThMenuOutline className={styles.menuButton} onClick={()=>{setMenu(true)}} size={30}/>
          {
            menu &&  <div className={`${styles.menu}`}>
              <Slider user={user} menu={menu} setMenu={setMenu}/>
            </div>
          }
      </div>
    
   
    </div>
  );
};

export default Links;
