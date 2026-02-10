import React, { FC } from "react";
import styles from "./ProductHeader.module.scss";

interface ProductHeaderProps {
  name: string;
  price: string;
  rating?: number;
  reviews?: number;
  description: string;
}

export const ProductHeader: FC<ProductHeaderProps> = ({
  name,
  price,
  rating = 4.0,
  reviews = 127,
  description,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.ratingSection}>
          <span className={styles.stars}>★★★★☆</span>
          <span className={styles.reviews}>
            {rating} ({reviews} reviews)
          </span>
        </div>
      </div>

      <div className={styles.priceSection}>
        <span className={styles.price}>{price}</span>
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProductHeader;
