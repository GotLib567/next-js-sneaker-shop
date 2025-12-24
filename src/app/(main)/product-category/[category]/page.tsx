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
            <div className={styles.topContainer}>
                <h1 className={styles.categoryTitle}>{`товары для ${CATEGORY_TILE_MAP[category]}`.toUpperCase()}</h1>
                <button className={styles.filtersBtn}>Показать фильтры</button>
            </div>
            <ProductsList />
        </div>
    )
}

export default ProductCategoryPage;