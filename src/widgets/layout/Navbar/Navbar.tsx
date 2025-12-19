import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { ProfileAction } from "./ProfileAction";

const MENU_ITEMS = [
  { label: "Новинки", href: "/new" },
  { label: "Мужчинам", href: "/product-category/man" },
  { label: "Женщинам", href: "/product-category/woman" },
  { label: "Бренды", href: "/brands" },
  { label: "Информация", href: "/info" },
] as const;

function Navbar() {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrapper}>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.menu}>
            {MENU_ITEMS.map(({ href, label }) => (
              <li key={href} className={styles.menuItem}>
                <Link href={href} className={styles.menuLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="/search" className={styles.actionButton} aria-label="Поиск">
            <Search className={styles.actionIcon} />
          </Link>

          <Link href="/favorites" className={styles.actionButton} aria-label="Избранное">
            <Heart className={styles.actionIcon} />
          </Link>

          <ProfileAction />

          <Link href="/cart" className={styles.actionButton} aria-label="Корзина">
            <ShoppingCart className={styles.actionIcon} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
