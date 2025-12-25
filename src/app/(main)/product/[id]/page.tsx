import { sneakers } from '@/src/mock';
import ImageSlider from '@/src/entities/ImageSlider/ImageSlider';
import styles from './ProductPage.module.css';
import ProductProvider from './ProductProvider';

interface Sneaker {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    description: string;
    sizes: number[];
    colors: string[];
    rating: number;
    inStock: boolean;
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = sneakers.find((sneaker: Sneaker) => sneaker.id === id);

    if (!product) {
        return <div>Товар не найден</div>;
    }

    return (
        <section className={styles.root}>
            <div className={styles.slider}>
                <ImageSlider />
            </div>
            <div className={styles.summary}>
                <h1 className={styles.label}>{product.name}</h1>
                <div className={styles.priceBox}>
                    <p className={styles.price}>${product.price}</p>
                    <span className={styles.original}>Оригинал</span>
                </div>
                <ProductProvider product={product} />
                <div className={styles.descriptionBox}>
                    <h2 className={styles.boxTitle}>Описание</h2>
                    <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.articul}>Артикул: {id}</div>
            </div>
        </section>
    );
}
