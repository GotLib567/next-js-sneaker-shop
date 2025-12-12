import { sneakers } from '@/src/mock';
import ImageSlider from '@/src/entities/ImageSlider/ImageSlider';
import styles from './ProductPage.module.css';
import { Heart } from 'lucide-react';

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
        return <div>Product not found</div>;
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
                <div className={styles.contentBox}>
                    <span className={styles.miniBoxTitle}>Выбор размера (EU)</span>
                    <div className={styles.sizesTable}>
                        {product.sizes.map((size) => (
                            <button key={size} className={styles.sizeButton}>
                                <div className={styles.sizeContent}>
                                    <span className={styles.sizeLabel}>{size}</span>
                                    <span>${product.price}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.descriptionBox}>
                    <h2 className={styles.boxTitle}>Описание</h2>
                    <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.articul}>Артикул: {id}</div>
                <div className={styles.btnContainer}>
                    <button className={styles.btnAddToCart}>В корзину</button>
                    <button className={styles.btnBuyNow}>Купить в 1 клик</button>
                    <button className={styles.btnFav}><Heart /></button>
                </div>
            </div>
        </section>
    );
}
