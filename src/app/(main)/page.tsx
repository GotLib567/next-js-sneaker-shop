import styles from "./Home.module.css";
import BannerSlider from "@/src/entities/BannerSlider/BannerSlider";
import Discounts from "@/src/entities/Discounts/Discounts";
import FrontCatalog from "@/src/entities/FrontCatalog/FrontCatalog";

export default function Home() {
  return (
    <main className={styles.root}>
      <BannerSlider />
      <Discounts />
      <div className={styles.mtSection}>
        <FrontCatalog />
      </div>
    </main>
  );
}
