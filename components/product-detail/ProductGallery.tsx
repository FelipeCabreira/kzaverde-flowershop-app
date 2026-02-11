import React, { FC, useState, useEffect } from "react";
import styles from "./ProductGallery.module.scss";
import { ProductDisclaimer } from "./ProductDisclaimer";

interface ProductGalleryProps {
  mainImage: string;
  images?: string[];
  productName: string;
  onImageSelect: (image: string) => void;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
  mainImage,
  images = [],
  productName,
  onImageSelect,
}) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  useEffect(() => {
    setSelectedImage(mainImage);
  }, [mainImage]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
    onImageSelect(image);
  };

  const allImages = images.length > 0 ? images : [mainImage];

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <img src={selectedImage} alt={productName} />
        </div>
        {allImages.length > 1 && (
          <div className={styles.thumbnails}>
            {allImages.map((img, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${
                  selectedImage === img ? styles.active : ""
                }`}
                onClick={() => handleThumbnailClick(img)}
                aria-label={`View product image ${index + 1}`}
              >
                <img src={img} alt={`${productName} view ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
      <ProductDisclaimer />
    </div>
  );
};

export default ProductGallery;
