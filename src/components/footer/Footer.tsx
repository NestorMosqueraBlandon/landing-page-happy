import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import styles from '@/styles/Footer.module.css';

const Footer: NextPage = () => {
    return (
        <footer className={styles.footer}>
         
         <div className={styles.banner_social}>
          <Link href="">
          <a><i className='bx bxl-instagram'></i></a>
          </Link>
          <Link href="">
          <a><i className='bx bxl-behance'></i></a>
          </Link>
          <Link href="/">
          <a> <i className='bx bxl-facebook' ></i></a>
          </Link>
        </div>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="" />
            </div>

            <p>
                2022 Copyrights & Protected
            </p>
        </footer>
    )
}

export default Footer;