import styles from "./Home.module.css";
import BannerSlider from "@/src/entities/BannerSlider/BannerSlider";
import Discounts from "@/src/entities/Discounts/Discounts";

export default function Home() {
  return (
    <main className={styles.root}>
      <BannerSlider />
      <Discounts />
    </main>
  );
}
