import styles from './BannerSlider.module.css';
import Image from "next/image";

function BannerSlider() {
  return (
    <div className={styles.root}>
      <div className={styles.imageWrapper}>
        <Image
          src="/assets/01.jpg"
          alt="banner slider"
          fill
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default BannerSlider;