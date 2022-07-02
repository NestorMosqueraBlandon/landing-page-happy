import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import styles from '@/styles/Header.module.css';

const Header: NextPage = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.svg" alt="" />
            </div>
            <nav>
                <Link href="/">
                    <a>SERVICIOS</a>
                </Link>
                <Link href="/">
                    <a>CONOCENOS</a>
                </Link>
                <Link href="/">
                    <a>CONTATO</a>
                </Link>
                <Link href="/">
                    <a>BLOG</a>
                </Link>
            </nav>

            <div>
                <button>Asesoria</button>
            </div>
        </header>
    )
}

export default Header;