import React, { FC, useEffect, useState } from "react";
import styles from "./ProductHeader.module.scss";

interface ProductHeaderProps {
  productId: number;
  name: string;
  price: string;
  rating?: number;
  reviews?: number;
  description: string;
}

export const ProductHeader: FC<ProductHeaderProps> = ({
  productId,
  name,
  price,
  rating = 4.0,
  reviews = 127,
  description,
}) => {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [displayRating, setDisplayRating] = useState(rating);
  const [displayReviews, setDisplayReviews] = useState(reviews);
  // const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setDisplayRating(rating);
    setDisplayReviews(reviews);
  }, [rating, reviews]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(`kzaverde-rating-${productId}`);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!Number.isNaN(parsed)) {
        setUserRating(parsed);
      }
    }
  }, [productId]);

  const handleRatingClick = async (value: number) => {
    setUserRating(value);
    if (typeof window !== "undefined") {
      localStorage.setItem(`kzaverde-rating-${productId}`, String(value));
    }

    // setIsSaving(true);
    try {
      const response = await fetch(`/api/products/${productId}/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: value }),
      });
      const result = await response.json();
      if (result?.success && result?.data) {
        setDisplayRating(result.data.rating ?? displayRating);
        setDisplayReviews(result.data.reviews ?? displayReviews);
      }
    } catch (error) {
      console.error("Failed to save rating:", error);
    } finally {
      // setIsSaving(false);
    }
  };

  // const activeStars = userRating ?? Math.round(displayRating);

  return (
    <div className={styles.header}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>{name}</h1>
        {/* <div className={styles.ratingSection}>
          <div
            className={`${styles.stars} ${isSaving ? styles.starsSaving : ""}`}
            role="group"
            aria-label="Avaliar produto"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`${styles.starButton} ${
                  value <= activeStars ? styles.starActive : ""
                }`}
                onClick={() => handleRatingClick(value)}
                aria-label={`Dar ${value} estrelas`}
              >
                ★
              </button>
            ))}
          </div>
          <span className={styles.reviews}>
            {displayRating} ({displayReviews} reviews)
          </span>
          {userRating && (
            <span className={styles.userRating}>
              Sua avaliacao: {userRating}
            </span>
          )}
        </div> */}
      </div>

      <div className={styles.priceSection}>
        <span className={styles.price}>{price}</span>
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProductHeader;
