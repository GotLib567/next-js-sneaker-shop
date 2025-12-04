import ProductCard from "@/app/components/ProductCard/ProductCard";
import styles from "./Discounts.module.css";

function Discounts() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Скидки</h1>
      <div className={styles.products}>
        <ProductCard
          label={"Кроссовки Nike Air Zoom Drive x NOCTA «Black White»"}
          image={"/assets/nike-air-5060.jpg"}
          price={17_663}
          link={"/"}
        />
        <ProductCard
          label={"Кроссовки Nike Air Zoom Drive x NOCTA «Black White»"}
          image={"/assets/nike-air-5060.jpg"}
          price={17_663}
          link={"/"}
        />
        <ProductCard
          label={"Кроссовки Nike Air Zoom Drive x NOCTA «Black White»"}
          image={"/assets/nike-air-5060.jpg"}
          price={17_663}
          link={"/"}
        />
      </div>
    </section>
  )
}

export default Discounts;