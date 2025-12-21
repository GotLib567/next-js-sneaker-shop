"use client";
import React from 'react';
import { signOut } from "next-auth/react";

function AccountPage() {
  return (
    <div style={{ marginTop: 40 }}>
        <h1>Мой аккаунт</h1>
        <button onClick={() => signOut({ redirectTo: "/" })} >Выйти</button>
    </div>
  )
}

export default AccountPage