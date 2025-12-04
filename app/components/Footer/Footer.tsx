import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

interface FooterProps {
  phone: string;
  email: string;
}

function Footer({ phone, email }: FooterProps) {
  return (
    <footer className={styles.root}>
      <div className={styles.containerWrap}>
        <div className={styles.copyright}>
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            priority
            className={styles.logo}
          />
          <span className={styles.copyrightInfo}>sneaker store 2025</span>
        </div>
        <nav>
          <div>Каталог</div>
          <div>
            <Link href="/">Новинки</Link>
            <Link href="/">Товары для мужчин</Link>
            <Link href="/">Товары для женщин</Link>
          </div>
        </nav>
        <nav>
          <div>Информация</div>
          <div>
            <Link href="/">Оплата и доставка</Link>
            <Link href="/">Выбор размера</Link>
            <Link href="/">Обмен и возврат</Link>
            <Link href="/">Вопросы-ответы</Link>
          </div>
        </nav>
        <div className={styles.contacts}>
          <div>
            <div>Контакты</div>
            <Link href="/">{phone}</Link>
            <Link href="/">{email}</Link>
          </div>
          <div className={styles.socialmedias}>
            <Link href="/" className={styles.imageWrapper}>
              <Image
                src="/assets/inst-icon.svg"
                fill
                alt="socialmedia icon"
              />
            </Link>
            <Link href="/" className={styles.imageWrapper}>
              <Image
                src="/assets/tg-icon.svg"
                fill
                alt="socialmedia icon"
              />
            </Link>
            <Link href="/" className={styles.imageWrapper}>
              <Image
                src="/assets/vk-icon.svg"
                fill
                alt="socialmedia icon"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.containerWrap}>
        <Link href="/" className={styles.link}>Конфиденциальность</Link>
        <Link href="/" className={styles.link}>Публичная оферта</Link>
        <Link href="/" className={styles.link}>Пользовательское соглашение
        </Link>
        <Link href="/" className={styles.link}>Обработка cookies</Link>
      </div>
    </footer>
  );
}

export default Footer;