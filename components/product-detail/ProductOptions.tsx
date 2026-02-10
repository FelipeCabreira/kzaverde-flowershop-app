import React, { FC, useState } from "react";
import styles from "./ProductOptions.module.scss";

interface ProductOptionsProps {
  onSizeChange: (size: string) => void;
  onTypeChange: (type: string) => void;
  onQuantityChange: (quantity: number) => void;
  initialSize?: string;
  initialType?: string;
  initialQuantity?: number;
}

const SIZES = ["Small", "Medium", "Large"];
const TYPES = ["Bouquet", "Arrangement", "Vase"];

export const ProductOptions: FC<ProductOptionsProps> = ({
  onSizeChange,
  onTypeChange,
  onQuantityChange,
  initialSize = "Small",
  initialType = "Bouquet",
  initialQuantity = 1,
}) => {
  const [size, setSize] = useState(initialSize);
  const [type, setType] = useState(initialType);
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleSizeChange = (newSize: string) => {
    setSize(newSize);
    onSizeChange(newSize);
  };

  const handleTypeChange = (newType: string) => {
    setType(newType);
    onTypeChange(newType);
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className={styles.options}>
      <div className={styles.optionGroup}>
        <label className={styles.label}>Size</label>
        <div className={styles.buttons}>
          {SIZES.map((s) => (
            <button
              key={s}
              className={`${styles.button} ${size === s ? styles.active : ""}`}
              onClick={() => handleSizeChange(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <label className={styles.label}>Type</label>
        <div className={styles.buttons}>
          {TYPES.map((t) => (
            <button
              key={t}
              className={`${styles.button} ${type === t ? styles.active : ""}`}
              onClick={() => handleTypeChange(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <label className={styles.label}>Quantity</label>
        <div className={styles.quantity}>
          <button
            className={styles.quantityBtn}
            onClick={() => handleQuantityChange(-1)}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            type="number"
            className={styles.quantityInput}
            value={quantity}
            readOnly
            aria-label="Product quantity"
          />
          <button
            className={styles.quantityBtn}
            onClick={() => handleQuantityChange(1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
