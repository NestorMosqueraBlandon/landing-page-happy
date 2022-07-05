import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import styles from '@/styles/Header.module.css';

const Header: NextPage = () => {
    return (
        <header className={styles.header}>
            <Link href="/">

            <div className={styles.logo}>
                <img src="/logo.svg" alt="" />
            </div>
            </Link>

            <nav>
                {/* <Link href="/">
                    <a>SERVICIOS</a>
                </Link>
                <Link href="/">
                    <a>CONOCENOS</a>
                </Link>*/}
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
            <button className={styles.barmenu}>
            <i className='bx bx-menu'></i>
            </button>
        </header>
    )
}

export default Header;