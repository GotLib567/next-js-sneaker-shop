"use client";
import { useState } from 'react';
import styles from './AuthForm.module.css';
import z, { email } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';

const schema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof schema>;

function AuthForm({ onSuccess }: { onSuccess: () => void; }) {
  const [authMode, setAuthMode] = useState<"register" | "login">("login");

  const { register,
         handleSubmit,
         formState: { errors, isSubmitting },
         setError, 
  } = useForm<FormValues>({resolver: zodResolver(schema)});
  
  const onSubmit = async (values: FormValues) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    if (res?.error) {
      setError("password", { message: "Неверный логин или пароль" });
      return;
    }

    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fields}>
            {authMode === "register" && (
              <>
                <label className={styles.label} htmlFor='name'>Имя</label>
                <input type="text" id='name' className={styles.input} placeholder='Иван Петров' />
              </>
            )}

            <label className={styles.label} htmlFor='email'>Почта</label>
            <input {...register("email")} type='email' id='email' className={styles.input} placeholder='example@gmail.com' />
            {errors.email && <div className={styles.errorText}>{errors.email.message}</div>}

            <label className={styles.label} htmlFor='password'>Пароль</label>
            <input {...register("password")} type='password' id='password' className={styles.input} placeholder='Введите пароль' />
            {errors.password && <div className={styles.errorText}>{errors.password.message}</div>}
        </div>

        {authMode === "register" && (
          <div className={styles.authMode}>
            <span>Уже зарегистрированы?</span>
            <a className={styles.changeModeBtn} onClick={() => setAuthMode("login")}>Войти</a>
          </div>
        )}

        {authMode === "login" && (
          <div className={styles.authMode}>
            <span>Ещё не зарегистрированы?</span>
            <a className={styles.changeModeBtn} onClick={() => setAuthMode("register")}>Регистрация</a>
          </div>
        )}
        
        <div className={styles.formBtns}>
            {authMode === "register" && <button type='submit' disabled style={{ backgroundColor: "red", }} className={styles.registerBtn} >Регистрация</button>}
            {authMode === "login" && <button type='submit' disabled={isSubmitting} className={styles.registerBtn} >Авторизация</button>}
        </div>
    </form>
  )
}

export default AuthForm;