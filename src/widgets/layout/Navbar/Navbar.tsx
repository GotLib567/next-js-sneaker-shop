import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {Heart, Search, ShoppingCart, UserRound} from "lucide-react";

const MENU_ITEMS = [
  { label: "Новинки", href: "/new" },
  { label: "Мужчинам", href: "/product-category/man" },
  { label: "Женщинам", href: "/product-category/woman" },
  { label: "Бренды", href: "/brands" },
  { label: "Информация", href: "/info" },
] as const;

const ACTION_ITEMS = [
  { Icon: Search, href: "/", label: "Поиск" },
  { Icon: Heart, href: "/", label: "Избранное" },
  { Icon: UserRound, href: "/", label: "Профиль" },
  { Icon: ShoppingCart, href: "/", label: "Корзина" },
] as const;

function Navbar() {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Link href="/public" className={styles.logoWrapper}>
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            priority
            className={styles.logo}
          />
        </Link>
        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.menu}>
            {
              MENU_ITEMS.map(({ href, label }) => (
                <li key={href} className={styles.menuItem} >
                  <Link href={href} className={styles.menuLink} >
                    {label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className={styles.actions}>
          {ACTION_ITEMS.map(({ Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              className={styles.actionButton}
              aria-label={label}
            >
              <Icon className={styles.actionIcon} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar;