import styles from "./AuthModal.module.css";
import AuthForm from '../AuthForm/AuthForm';

function AuthModal() {
  return (
    <div className={styles.overlay}>
        <div className={styles.container}>
            <h1 className={styles.title}>Авторизация</h1>
            <AuthForm />
        </div>
    </div>
  )
}

export default AuthModal;