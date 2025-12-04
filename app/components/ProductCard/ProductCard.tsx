import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  label: string;
  image: string;
  price: number;
  link: string;
  discount?: number;
  discountPercent?: number;
  discountPrice?: number;
}

function ProductCard({ label, image, link, price }: ProductCardProps) {
  return (
    <div className={styles.container}>
      <Link href={link} >
        <Image
          src={image}
          alt="product card image"
          width={400}
          height={400}
        />
        <div className={styles.label}>{label}</div>
      </Link>
      <div className={styles.priceContainer}>
        <span className={styles.price}>{price} ₽</span>
      </div>
    </div>
  );
}

export default ProductCard;