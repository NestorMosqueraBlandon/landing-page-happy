import { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import styles from '@/styles/Header.module.css';

const Header: NextPage = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container_header}>

            <Link href="/">
            <a>

            <div className={styles.logo}>
                <img src="/logo.svg" alt="" />
            </div>
            </a>

            </Link>

            <nav>
                {/* <Link href="/">
                    <a>SERVICIOS</a>
                </Link>
                <Link href="/">
                    <a>CONOCENOS</a>
                </Link>*/}
                 <Link href="/">
                    <a>INICIO</a>
                </Link> 
                <Link href="/team">
                    <a>EQUIPO</a>
                </Link> 
                <Link href="/blog">
                    <a>BLOG</a>
                </Link>
            </nav>

            <div>
                <button>Asesoria</button>
            </div>
            <button className={styles.barmenu} onClick={() => setOpenMenu(true)}>
            <i className='bx bx-menu'></i>
            </button>


            <div className={openMenu? styles.mobile_menu : `${styles.mobile_menu} ${styles.active}`}>
            <button className={styles.barmenu} onClick={() => setOpenMenu(false)}>
            <i className='bx bx-menu'></i>
            </button>

            <Link href="/team">
                    <a>EQUIPO</a>
                </Link> 
                <Link href="/blog">
                    <a>BLOG</a>
                </Link>
            </div>
            </div>

        </header>
    )
}

export default Header;