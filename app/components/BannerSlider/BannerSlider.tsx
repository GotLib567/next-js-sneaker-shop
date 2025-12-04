import styles from './BannerSlider.module.css';
import Image from "next/image";

function BannerSlider() {
  return (
    <div className={styles.root}>
      <Image
        src="/assets/01.jpg"
        alt="banner slider"
        width={1360}
        height={450}
      />
    </div>
  )
}

export default BannerSlider;