import styles from './AuthForm.module.css';

function AuthForm() {
  return (
    <form>
        <div className={styles.fields}>
            <label className={styles.label} htmlFor='name'>Имя</label>
            <input type="text" id='name' className={styles.input} placeholder='Иван Петров' />

            <label className={styles.label} htmlFor='email'>Почта</label>
            <input type='email' id='email' className={styles.input} placeholder='example@gmail.com' />

            <label className={styles.label} htmlFor='password'>Пароль</label>
            <input type='password' id='password' className={styles.input} placeholder='Введите пароль' />
        </div>
        <div className={styles.formBtns}>
            <button type='submit' className={styles.registerBtn} >Регистрация</button>
        </div>
    </form>
  )
}

export default AuthForm;