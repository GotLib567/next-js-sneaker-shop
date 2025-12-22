import Link from "next/link";
import styles from "./FrontCatalog.module.css";
import Image from "next/image";

function FrontCatalog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Для кого выбираешь?</h1>
      <div className={styles.cards}>

        <Link href={"/product-category/man"} className={styles.card}>
          <Image
            className={styles.cardImg}
            src="/images/cat_man.jpg"
            alt="category man"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
          <span className={styles.cardHeading}>Товары для мужчин</span>
        </Link>

        <Link href={"/product-category/woman"} className={styles.card}>
          <Image
            className={styles.cardImg} 
            src="/images/cat_woman.jpg"
            alt="category man" 
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
          <span className={styles.cardHeading}>Товары для женщин</span>
        </Link>

        <Link href={"/product-category/man"} className={styles.card}>
          <Image
            className={styles.cardImg} 
            src="/images/basket.jpg"
            alt="category man" 
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
          <span className={styles.cardHeading}>Баскетбол</span>
        </Link>

      </div>
    </div>
  )
}

export default FrontCatalog