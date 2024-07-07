import Link from "next/link";
import style from "./NavigationBar.module.css";

export default function NavigationBar() {
    return (
        <nav className={style.navigationContainer}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    );
}