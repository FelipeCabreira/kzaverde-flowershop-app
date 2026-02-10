import React, { FC } from "react";
import styles from "./ProductCare.module.scss";

interface ProductCareProps {
  instructions?: string[];
}

const DEFAULT_INSTRUCTIONS = [
  "Change water every 2-3 days for freshness",
  "Trim stems at a 45-degree angle before placing in water",
  "Keep away from direct sunlight and heat sources",
  "Remove any wilted petals to extend bouquet life",
];

export const ProductCare: FC<ProductCareProps> = ({
  instructions = DEFAULT_INSTRUCTIONS,
}) => {
  return (
    <div className={styles.care}>
      <h3 className={styles.title}>Care Instructions</h3>
      <ul className={styles.list}>
        {instructions.map((instruction, index) => (
          <li key={index} className={styles.item}>
            {instruction}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCare;
