import ProductCard from "@/src/entities/product/ProductCard/ProductCard";
import styles from "./Discounts.module.css";
import { sneakers } from "@/src/mock";

function Discounts() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Скидки</h1>
      <div className={styles.products}>
        {sneakers.slice(0, 3).map(({ id, name, image, price }) => (
          <ProductCard
            key={id}
            label={name}
            image={image}
            price={price}
            link={`/product/${id}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Discounts;