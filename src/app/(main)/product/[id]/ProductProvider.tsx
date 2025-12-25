"use client";
import { useCartStore } from '@/src/features/cart/model/cart.store';
import React, { useEffect, useState } from 'react'
import styles from './ProductPage.module.css';
import { Heart } from 'lucide-react';
import clsx from 'clsx';

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

function ProductProvider({ product }: { product: Sneaker }) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addToCart = useCartStore((s) => s.addToCart);
  const cartItems = useCartStore((s) => s.items);

  const handleAddToCart = () => {
    if (selectedSize === null) {
      setError('Пожалуйста, выберите размер');
      return;
    }

    addToCart(product.id, selectedSize);
    setError(null);
  }

  useEffect(() => {
    console.log('Cart items:', cartItems);
  }, [cartItems]);

  return (
    <div>
      <div className={styles.contentBox}>
        <span className={styles.miniBoxTitle}>Выбор размера (EU)</span>
        <div className={styles.sizesTable}>
          {product.sizes.map((size) => (
            <button
              key={size}
              className={clsx(styles.sizeButton, selectedSize === size && styles.selectedSize)}
              onClick={() => setSelectedSize(size)}
            >
              <div className={styles.sizeContent}>
                <span className={styles.sizeLabel}>{size}</span>
                <span>${product.price}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.btnAddToCart}
          onClick={handleAddToCart}
        >
          В корзину
        </button>
        <button className={styles.btnBuyNow}>Купить в 1 клик</button>
        <button className={styles.btnFav}><Heart /></button>
      </div>
    </div>
  )
}

export default ProductProvider;
