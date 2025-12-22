import ProductsList from '@/src/entities/ProductsList/ProductsList';
import styles from './ProductCategoryPage.module.css';

const CATEGORY_TILE_MAP: Record<string, string> = {
    man: "мужчин",
    woman: "женщин",
} as const;

async function ProductCategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;
    
    return (
        <div className={styles.root}>
            <h1 className={styles.categoryTitle}>{`товары для ${CATEGORY_TILE_MAP[category]}`.toUpperCase()}</h1>
            <ProductsList />
        </div>
    )
}

export default ProductCategoryPage;