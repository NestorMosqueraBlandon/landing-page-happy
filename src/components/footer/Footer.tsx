import { NextPage } from "next";
import React from "react";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footer_social}>
          <Link href="">
            <a>
              <i className="bx bxl-instagram"></i>
            </a>
          </Link>
          <Link href="">
            <a>
              <i className="bx bxl-behance"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              {" "}
              <i className="bx bxl-facebook"></i>
            </a>
          </Link>
        </div>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="" />
        </div>

        <p>&copy; 2022 Happy Creative Agency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
