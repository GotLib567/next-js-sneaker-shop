import styles from "./Home.module.css";
import BannerSlider from "@/src/app/components/BannerSlider/BannerSlider";
import Discounts from "@/src/app/components/sections/Discounts/Discounts";

export default function Home() {
  return (
    <main className={styles.root}>
      <BannerSlider />
      <Discounts />
    </main>
  );
}
