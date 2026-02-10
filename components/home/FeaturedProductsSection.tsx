import React, { FC } from "react";
import ProductCard from "../product-card";
import { useProducts } from "../../lib/hooks";

interface FeaturedProductsSectionProps {
  products?: any[]; // Optional - if not provided, will fetch from API
}

const FeaturedProductsSection: FC<FeaturedProductsSectionProps> = ({
  products: staticProducts,
}) => {
  const { products: apiProducts, loading } = useProducts();
  const products = staticProducts || apiProducts;

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
      {loading ? (
        <div style={{ padding: "40px", textAlign: "center", color: "#ccc" }}>
          Carregando produtos...
        </div>
      ) : (
        <div className="featured-products__rail">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              alt={product.alt || product.name}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedProductsSection;
