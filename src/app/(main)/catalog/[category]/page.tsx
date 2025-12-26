import ProductsList from '@/src/entities/ProductsList/ProductsList';
import styles from './ProductCategoryPage.module.css';
import Breadcrumbs from '@/src/shared/ui/Breadcrumbs/Breadcrumbs';

const CATEGORY_TILE_MAP: Record<string, string> = {
    man: "мужчин",
    woman: "женщин",
} as const;

const CATEGORIES: Record<string, string> = {
    man: "Мужчины",
    woman: "Женщины",
}

async function ProductCategoryPage({ params }: { params: { category: string } }) {
    const { category } = await params;

    return (
        <div className={styles.root}>
            <Breadcrumbs items={[
                { label: "Главная", href: "/" },
                { label: "Каталог", href: "/catalog" },
                { label: CATEGORIES[category] }
            ]} />
            <div className={styles.topContainer}>
                <h1 className={styles.categoryTitle}>{`товары для ${CATEGORY_TILE_MAP[category]}`.toUpperCase()}</h1>
                <button className={styles.filtersBtn}>Показать фильтры</button>
            </div>
            <ProductsList />
        </div>
    )
}

export default ProductCategoryPage;