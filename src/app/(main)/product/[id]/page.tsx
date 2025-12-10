import { sneakers } from '@/src/mock';
import ImageSlider from '@/src/entities/ImageSlider/ImageSlider';
import styles from './ProductPage.module.css';

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
                <p className={styles.price}>${product.price}</p>
                <p>{product.description}</p>
            </div>
        </section>
    );
}
