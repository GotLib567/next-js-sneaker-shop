"use client";
import { useCartStore } from '@/src/features/cart/model/cart.store';
import styles from './CartPage.module.css';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/src/shared/ui/Breadcrumbs/Breadcrumbs';

function CartPage() {
  const cartItems = useCartStore((state) => state.items);

  useEffect(() => {
    console.log('Cart items:', cartItems);
  }, [cartItems]);

  return (
    <div className={styles.root}>
      <Breadcrumbs items={[
        { label: "Главная", href: "/" },
        { label: "Корзина" },
      ]} />
      {cartItems.length !== 0 ? (
        <div>
          <div>Товары: {cartItems.length}</div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={`${item.id}-${item.size}-${index}`}>
                Товар {item.id}, размер {item.size}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <span className={styles.title}>В корзине пока нет товаров</span>
          <Link href="/catalog" className={styles.catalogBtn}>Перейти в каталог</Link>
        </div>
      )}
    </div>
  )
}

export default CartPage
