"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';


export default function Home() {

  return (
    <main className={styles.main}>
      <Image className={styles.background_image} src="/background.jpg" alt="background" width={1920} height={1200} />
      <div className={styles.container}>
        <div className={styles.publicity}>
          <Image src="/logo.svg" alt="logo" width={100} height={100} color="black" priority />
          <h1>Personal Finance Manager</h1>
          <p>Manage your personal finances with ease.</p>
          <Link target="_blank" href="https://github.com/Bruno-Brandao-Silva">Bruno&apos;s github</Link>
        </div>
        <div className={styles.login}>
          <Link href="/login">LOGIN</Link>
          <Link href="/register">RESGITER</Link>
        </div>
      </div>
    </main>
  );
}
