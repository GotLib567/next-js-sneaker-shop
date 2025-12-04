import styles from './BannerSlider.module.css';
import Image from "next/image";

function BannerSlider() {
  return (
    <div className={styles.root}>
      <Image
        src="/assets/01.jpg"
        alt="banner slider"
        width={1200}
        height={430}
      />
    </div>
  )
}

export default BannerSlider;