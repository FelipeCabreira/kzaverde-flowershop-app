import React, { FC } from "react";
import ProductCard from "../product-card";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
}

interface FeaturedProductsSectionProps {
  products: Product[];
}

const FeaturedProductsSection: FC<FeaturedProductsSectionProps> = ({
  products,
}) => {
  return (
    <section
      id="featured-products"
      className="featured-products flex flex-column align-center"
    >
      <div className="featured-products__header">
        <h2 className="section-title">Mais vendidos</h2>
        <p className="section-subtitle">
          Nossos favoritos atuais, disponíveis para pré-encomenda imediata.
        </p>
      </div>
      <div className="featured-products__rail">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            alt={product.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
