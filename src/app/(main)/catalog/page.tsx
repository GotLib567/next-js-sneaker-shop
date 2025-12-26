import FrontCatalog from '@/src/entities/FrontCatalog/FrontCatalog'
import Breadcrumbs from '@/src/shared/ui/Breadcrumbs/Breadcrumbs'
import React from 'react'
import styles from "./CatalogPage.module.css"

function CatalogPage() {
  return (
    <div className={styles.root}>
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
        ]} />
      <FrontCatalog />
    </div>
  )
}

export default CatalogPage
