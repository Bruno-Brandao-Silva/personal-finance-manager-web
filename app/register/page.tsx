"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URL!;

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const handleRegisterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post(`${SERVER_URI}/api/auth/register`, { name, email, password }).then((response) => {
      console.log(response);
      router.push('/dashboard');
    }).catch((error) => {
      toast.error(error.message);
    });
  };

  const handleLabelChange = (input: string) => {
    if (input && input.length > 0) {
      return styles.on_inputed_label;
    }
  }

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
          <h1>Register</h1>
          <form onSubmit={handleRegisterSubmit}>
            <div className={styles.input_container}>
              <label htmlFor="name" id={handleLabelChange(name)}>Name:</label>
              <input id="name" type="text" name="name" placeholder=" " value={name} onChange={handleNameChange} autoComplete="name" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="email" id={handleLabelChange(email)}>Email:</label>
              <input id="email" type="email" name="email" placeholder=" " value={email} onChange={handleEmailChange} autoComplete="email" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="password" id={handleLabelChange(password)}>Password:</label>
              <input id="password" type="password" name="password" placeholder=" " value={password} onChange={handlePasswordChange} autoComplete="new-password" />
            </div>
            <Link href="/login" className={styles.register_link}>Do have an account? Login here.</Link>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </main>
  );
}
