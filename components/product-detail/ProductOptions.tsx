import React, { FC, useState } from "react";
import styles from "./ProductOptions.module.scss";

interface ProductOptionsProps {
  // onSizeChange: (size: string) => void; // Commented for now
  // onTypeChange: (type: string) => void; // Commented for now
  onQuantityChange: (quantity: number) => void;
  onOrderDetailsChange: (orderDetails: string) => void;
  // initialSize?: string; // Commented for now
  // initialType?: string; // Commented for now
  initialQuantity?: number;
  initialOrderDetails?: string;
}

// const SIZES = ["Small", "Medium", "Large"]; // Commented for now
// const TYPES = ["Bouquet", "Arrangement", "Vase"]; // Commented for now

export const ProductOptions: FC<ProductOptionsProps> = ({
  // onSizeChange, // Commented for now
  // onTypeChange, // Commented for now
  onQuantityChange,
  onOrderDetailsChange,
  // initialSize = "Small", // Commented for now
  // initialType = "Bouquet", // Commented for now
  initialQuantity = 1,
  initialOrderDetails = "",
}) => {
  // const [size, setSize] = useState(initialSize); // Commented for now
  // const [type, setType] = useState(initialType); // Commented for now
  const [quantity, setQuantity] = useState(initialQuantity);
  const [orderDetails, setOrderDetails] = useState(initialOrderDetails);

  // const handleSizeChange = (newSize: string) => { // Commented for now
  //   setSize(newSize);
  //   onSizeChange(newSize);
  // };

  // const handleTypeChange = (newType: string) => { // Commented for now
  //   setType(newType);
  //   onTypeChange(newType);
  // };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleOrderDetailsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setOrderDetails(value);
    onOrderDetailsChange(value);
  };

  return (
    <div className={styles.options}>
      {/* SIZE - Commented for now */}
      {/* <div className={styles.optionGroup}>
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
      </div> */}

      {/* TYPE - Commented for now */}
      {/* <div className={styles.optionGroup}>
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
      </div> */}

      <div className={styles.optionGroup}>
        <label className={styles.label}>Quantidade</label>
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

      <div className={styles.optionGroup}>
        <label className={styles.label} htmlFor="orderDetails">
          Detalhes do pedido
        </label>
        <textarea
          id="orderDetails"
          className={styles.orderDetailsInput}
          value={orderDetails}
          onChange={handleOrderDetailsChange}
          placeholder="Adicione informações adicionais sobre seu pedido (cores preferidas, mensagem especial, data de entrega, etc.)"
          rows={4}
          aria-label="Order details"
        />
      </div>
    </div>
  );
};

export default ProductOptions;
