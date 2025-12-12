import ProductsList from '@/src/entities/ProductsList/ProductsList';
import styles from './ProductCategoryPage.module.css';

function ProductCategoryPage() {
    return (
        <div className={styles.root}>
            <h1 className={styles.categoryTitle}>Product Category Page</h1>
            <ProductsList />
        </div>
    )
}

export default ProductCategoryPage;