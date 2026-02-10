import React, { FC, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import ProductGallery from "../../components/product-detail/ProductGallery";
import ProductHeader from "../../components/product-detail/ProductHeader";
import ProductCare from "../../components/product-detail/ProductCare";
import ProductOptions from "../../components/product-detail/ProductOptions";
import ProductActions from "../../components/product-detail/ProductActions";
import SimilarProducts from "../../components/product-detail/SimilarProducts";
import catalogData from "../../data/catalog.json";
import { Product } from "../../types/product";
import styles from "../../components/product-detail/ProductDetail.module.scss";

const ProductDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = catalogData.catalog.find(
    (p) => p.id === parseInt(id as string),
  ) as Product | undefined;

  const [size, setSize] = useState<string>("Small");
  const [type, setType] = useState<string>("Bouquet");
  const [quantity, setQuantity] = useState<number>(1);

  // Get similar products from the same category
  const similarProducts = catalogData.catalog
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4) as Product[];

  if (!product) {
    return (
      <>
        <Navigation />
        <div
          className={styles.container}
          style={{ textAlign: "center", paddingTop: "100px" }}
        >
          <h1>Product not found</h1>
          <p>The product you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{product.name} - KzaVerde</title>
          <meta property="og:title" content={`${product.name} - KzaVerde`} />
          <meta property="og:description" content={product.description} />
        </Head>
        <Navigation />

        <section className={styles.detail}>
          <div className={styles.inner}>
            <ProductGallery
              mainImage={product.image}
              images={product.images}
              productName={product.name}
              onImageSelect={() => {}}
            />

            <div className={styles.info}>
              <ProductHeader
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                description={product.description}
              />

              <ProductCare instructions={product.careInstructions} />

              <ProductOptions
                onSizeChange={setSize}
                onTypeChange={setType}
                onQuantityChange={setQuantity}
                initialSize={size}
                initialType={type}
                initialQuantity={quantity}
              />

              <ProductActions
                productName={product.name}
                productPrice={product.price}
                size={size}
                type={type}
                quantity={quantity}
                productId={product.id}
              />
            </div>
          </div>
        </section>

        {similarProducts.length > 0 && (
          <SimilarProducts products={similarProducts} />
        )}

        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
