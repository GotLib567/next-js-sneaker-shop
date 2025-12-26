"use client";
import { useCartStore } from '@/src/features/cart/model/cart.store';
import styles from './CartPage.module.css';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/src/shared/ui/Breadcrumbs/Breadcrumbs';
import CartTotals from '@/src/entities/CartTotals/CartTotals';
import Image from 'next/image';
import { sneakers } from '@/src/mock';
import { Heart, X } from 'lucide-react';

function CartPage() {
  const cartItems = useCartStore((state) => state.items);

  const cartProducts = cartItems
    .map((i) => {
      const product = sneakers.find((s) => s.id === i.id);
      if (!product) return null;
      return { ...product, size: i.size };
    })
    .filter(Boolean);

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
        <div className={styles.cartContent}>
          <div>
            <div>Бесплатная доставка заказов на сумму от 200$</div>
            {cartProducts.map((i) => (
              <div key={i?.id}>
                <Image src={i?.image} width={208} height={208} />
                <div>
                  <span>{i?.name}</span>
                  <span>Артикул: {i?.id}</span>
                  <span>Размер: {i?.size}</span>
                  <div>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                  </div>
                </div>
                <div>
                  <span>{i?.price} $</span>
                  <Heart />
                  <X />
                </div>
              </div>
            ))}
          </div>
          <CartTotals />
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
