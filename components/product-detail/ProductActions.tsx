import React, { FC, useState, useEffect } from "react";
import styles from "./ProductActions.module.scss";

interface ProductActionsProps {
  productName: string;
  productPrice: string;
  // size: string; // Commented for now
  // type: string; // Commented for now
  quantity: number;
  orderDetails: string;
  shippingAddress: string;
  productId: number;
}

export const ProductActions: FC<ProductActionsProps> = ({
  productName,
  productPrice,
  // size, // Commented for now
  // type, // Commented for now
  quantity,
  orderDetails,
  shippingAddress,
  productId,
}) => {
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    // Check if product is in wishlist on mount
    const currentWishlist = JSON.parse(
      localStorage.getItem("kzaverde-wishlist") || "[]",
    );
    setWishlist(currentWishlist.includes(productId));
  }, [productId]);

  const generateWhatsAppMessage = () => {
    const baseMessage =
      `Olá! Gostaria de fazer um pedido:\n\n` +
      `• Produto: ${productName}\n` +
      `• Quantidade: ${quantity}\n` +
      `• Preço: ${productPrice}`;

    const detailsSection = orderDetails.trim()
      ? `\n\n• Detalhes do pedido:\n${orderDetails}`
      : "";

    const shippingSection = shippingAddress.trim()
      ? `\n\n• Endereço de entrega:\n${shippingAddress}`
      : "";

    const finalMessage =
      baseMessage +
      detailsSection +
      shippingSection +
      `\n\nPor favor, confirme a disponibilidade e forneça mais detalhes.`;

    return `https://wa.me/555183388338?text=${encodeURIComponent(finalMessage)}`;
  };

  const handleAddToWishlist = () => {
    const newWishlistState = !wishlist;
    setWishlist(newWishlistState);

    const currentWishlist = JSON.parse(
      localStorage.getItem("kzaverde-wishlist") || "[]",
    );

    if (newWishlistState) {
      localStorage.setItem(
        "kzaverde-wishlist",
        JSON.stringify([...currentWishlist, productId]),
      );
    } else {
      localStorage.setItem(
        "kzaverde-wishlist",
        JSON.stringify(
          currentWishlist.filter((id: number) => id !== productId),
        ),
      );
    }
  };

  return (
    <div className={styles.actions}>
      <a
        href={generateWhatsAppMessage()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={`btn btn-lg btn-primary ${styles.whatsappBtn}`}>
          <svg
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.497 4.409a10 10 0 0 1-10.36 16.828l-.223-.098l-4.759.849l-.11.011a1 1 0 0 1-.11 0l-.102-.013l-.108-.024l-.105-.037l-.099-.047l-.093-.058l-.014-.011l-.012-.007l-.086-.073l-.077-.08l-.067-.088l-.056-.094l-.034-.07l-.04-.108l-.028-.128l-.012-.102a1 1 0 0 1 0-.125l.012-.1l.024-.11l.045-.122l1.433-3.304l-.009-.014A10 10 0 0 1 5.056 4.83l.215-.203a10 10 0 0 1 13.226-.217M9.5 7.5A1.5 1.5 0 0 0 8 9v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0-3h-1l-.144.007a1.5 1.5 0 0 0-1.128.697l-.042.074l-.022-.007a4.01 4.01 0 0 1-2.435-2.435l-.008-.023l.075-.041A1.5 1.5 0 0 0 11 10V9a1.5 1.5 0 0 0-1.5-1.5"
              fill="currentColor"
            ></path>
          </svg>
          <span>Reserve via WhatsApp</span>
        </button>
      </a>
      <button
        className={`btn btn-lg btn-outline ${styles.wishlistBtn} ${
          wishlist ? styles.active : ""
        }`}
        onClick={handleAddToWishlist}
        aria-label={
          wishlist
            ? "Remover da lista de desejos"
            : "Adicionar à lista de desejos"
        }
      >
        <svg
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          fill={wishlist ? "currentColor" : "none"}
          stroke="currentColor"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>{wishlist ? "Remover da" : "Adicionar à"} Lista de Desejos</span>
      </button>
    </div>
  );
};

export default ProductActions;
