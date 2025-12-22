"use client";
import { signOut } from "next-auth/react";
import styles from "./AccountPage.module.css";

function AccountPage() {
  return (
    <div className={styles.root}>
        <h1 className={styles.title} >Мой аккаунт</h1>
        <button className={styles.extBtn} onClick={() => signOut({ redirectTo: "/" })} >Выйти</button>
    </div>
  )
}

export default AccountPage