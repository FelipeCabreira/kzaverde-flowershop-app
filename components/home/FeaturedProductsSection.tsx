import { FC, useMemo, useRef, useState } from "react";
import { useProducts } from "../../lib/hooks";
import ProductCard from "../ProductCard";

interface FeaturedProductsSectionProps {
  products?: any[]; // Optional - if not provided, will fetch from API
}

const FeaturedProductsSection: FC<FeaturedProductsSectionProps> = ({
  products: staticProducts,
}) => {
  const { products: apiProducts, loading } = useProducts({
    initialProducts: staticProducts ?? [],
    enabled: !staticProducts,
  });
  const products = staticProducts || apiProducts;
  const sectionRef = useRef<HTMLElement | null>(null);
  const pageSize = 8;
  const [pageIndex, setPageIndex] = useState(0);

  const totalPages = useMemo(() => {
    if (!products || products.length === 0) return 0;
    return Math.ceil(products.length / pageSize);
  }, [products]);

  const pagedProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    const start = pageIndex * pageSize;
    return products.slice(start, start + pageSize);
  }, [products, pageIndex]);

  const showCarousel = products.length > pageSize;
  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex + 1 < totalPages;

  const goToPage = (nextPage: number) => {
    setPageIndex(nextPage);
    const target = sectionRef.current;
    if (target) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="featured-products"
      className="featured-products flex flex-column align-center"
    >
      <div className="featured-products__header">
        <h2 className="section-title">Mais vendidos</h2>
        <p className="section-subtitle">
          Descubra os produtos mais procurados por nossos clientes. Qualidade
          garantida, verifique disponibilidade de entrega pelo nosso WhatsApp.
        </p>
      </div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "320px",
          }}
        >
          <div className="featured-products__rail">
            {Array.from({ length: pageSize }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="product-card"
                style={{ opacity: 0.6 }}
              >
                <div
                  className="product-card__img"
                  style={{ background: "#eee", height: "180px" }}
                />
                <div className="product-card__info">
                  <div
                    style={{
                      background: "#eee",
                      height: "16px",
                      marginBottom: "8px",
                      width: "70%",
                    }}
                  />
                  <div
                    style={{
                      background: "#eee",
                      height: "14px",
                      width: "40%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="featured-products__rail">
            {pagedProducts.map((product) => (
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
          {showCarousel && (
            <div
              className="featured-products__controls"
              style={{ display: "flex", gap: "12px", marginBottom: "16px" }}
            >
              <button
                type="button"
                className="btn btn-sm"
                disabled={!canGoPrev}
                onClick={() => goToPage(Math.max(pageIndex - 1, 0))}
              >
                Anterior
              </button>
              <span style={{ alignSelf: "center", color: "#777" }}>
                {pageIndex + 1} / {totalPages}
              </span>
              <button
                type="button"
                className="btn btn-sm"
                disabled={!canGoNext}
                onClick={() =>
                  goToPage(Math.min(pageIndex + 1, totalPages - 1))
                }
              >
                Proximo
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default FeaturedProductsSection;
