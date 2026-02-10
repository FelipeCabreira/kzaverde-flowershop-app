import React, { FC } from "react";
import styles from "./SimilarProducts.module.scss";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface SimilarProductsProps {
  products: Product[];
}

export const SimilarProducts: FC<SimilarProductsProps> = ({ products }) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>You May Also Like</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
                <button className={`btn btn-sm btn-primary ${styles.button}`}>
                  View Details
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
