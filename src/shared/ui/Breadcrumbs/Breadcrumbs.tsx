"use client";
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from "./Breadcrumbs.module.css";
import Link from 'next/link';

export type Breadcrumbs = {
  label: string;
  href?: string;
}

function Breadcrumbs({ items }: { items: Breadcrumbs[] }) {
  return (
    <nav className={styles.breadcrumbs}>
      {items.map(({ label, href }, idx) => {
        const isLast = idx === items.length - 1;

        return (
          <span className={styles.breadcrumb} key={label}>
            {
              isLast ? (
                <span>{label}</span>
              ) : (
                <Link href={href || "/"}>{label}</Link>
              )
            }
            {!isLast && <span className={styles.separator}>/</span>}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
