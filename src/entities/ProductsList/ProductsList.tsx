import { sneakers } from '@/src/mock';
import styles from './ProductsList.module.css';
import ProductCard from '../product/ProductCard/ProductCard';

function ProductsList() {
    return (
        <div className={styles.container}>
            {sneakers.map(({ id, name, image, price }) => (
                <ProductCard
                    key={id}
                    label={name}
                    image={image}
                    price={price}
                    link={`/product/${id}`}
                />
            ))}
        </div>
    )
}

export default ProductsList;