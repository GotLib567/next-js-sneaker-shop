"use client"
import styles from "./AuthModal.module.css";
import AuthForm from '../AuthForm/AuthForm';
import { X } from "lucide-react";
import { useAuthModal } from "../../model/auth-modal.store";

function AuthModal() {
  const { close } = useAuthModal();

  return (
    <div className={styles.overlay}>
        <div className={styles.container}>
            <h1 className={styles.title}>Авторизация</h1>
            <X width={20} height={20} className={styles.cross} onClick={() => close()} />
            <AuthForm />
        </div>
    </div>
  )
}

export default AuthModal;