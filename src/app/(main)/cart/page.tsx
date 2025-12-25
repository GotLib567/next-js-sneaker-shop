"use client";
import { useCartStore } from '@/src/features/cart/model/cart.store';
import styles from './CartPage.module.css';
import React, { useEffect } from 'react';

function CartPage() {
  const cartItems = useCartStore((state) => state.items);

  useEffect(() => {
    console.log('Cart items:', cartItems);
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <span className={styles.title}>В корзине пока нет товаров</span>
        <button className={styles.catalogBtn}>Перейти в каталог</button>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <div>Товары: {cartItems.length}</div>
      <ul>
        {cartItems.map((item, index) => (
          <li key={`${item.id}-${item.size}-${index}`}>
            Товар {item.id}, размер {item.size}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartPage
