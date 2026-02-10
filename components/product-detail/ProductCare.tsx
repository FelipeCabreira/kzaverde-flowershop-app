import React, { FC } from "react";
import styles from "./ProductCare.module.scss";

interface ProductCareProps {
  instructions?: string[];
}

const DEFAULT_INSTRUCTIONS = [
  "Troque a água a cada 2-3 dias para manter a frescura",
  "Corte as hastes em um ângulo de 45 graus antes de colocar na água",
  "Mantenha longe da luz solar direta e fontes de calor",
  "Remova pétalas murchas para prolongar a vida do buquê",
];

export const ProductCare: FC<ProductCareProps> = ({
  instructions = DEFAULT_INSTRUCTIONS,
}) => {
  return (
    <div className={styles.care}>
      <h3 className={styles.title}>Instruções de cuidados</h3>
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
