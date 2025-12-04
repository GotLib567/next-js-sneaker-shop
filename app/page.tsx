import styles from "./Home.module.css";
import BannerSlider from "@/app/components/BannerSlider/BannerSlider";
import Discounts from "@/app/components/sections/Discounts/Discounts";

export default function Home() {
  return (
    <main className={styles.root}>
      <BannerSlider />
      <Discounts />
    </main>
  );
}
