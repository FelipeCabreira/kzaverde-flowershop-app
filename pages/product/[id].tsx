import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import ProductActions from "../../components/product-detail/ProductActions";
import ProductCare from "../../components/product-detail/ProductCare";
import styles from "../../components/product-detail/ProductDetail.module.scss";
import ProductGallery from "../../components/product-detail/ProductGallery";
import ProductHeader from "../../components/product-detail/ProductHeader";
import ProductOptions from "../../components/product-detail/ProductOptions";
import SimilarProducts from "../../components/product-detail/SimilarProducts";
import { useProduct, useProducts } from "../../lib/hooks";

const ProductDetail: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const productId = id ? parseInt(id as string) : undefined;
  const isRouterReady = router.isReady;

  const { product, loading: productLoading } = useProduct(productId || 0);
  const { products: allProducts } = useProducts();

  // const [size, setSize] = useState<string>("Small"); // Commented for now
  // const [type, setType] = useState<string>("Bouquet"); // Commented for now
  const [quantity, setQuantity] = useState<number>(1);
  const [orderDetails, setOrderDetails] = useState<string>("");
  const [shippingAddress, setShippingAddress] = useState<string>("");

  // Get similar products from the same category
  const similarProducts = allProducts
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (productLoading) {
    return (
      <>
        <Navigation />
        <div
          className={styles.container}
          style={{ textAlign: "center", paddingTop: "100px" }}
        >
          <img src="/loader.svg" alt="Carregando" width={96} height={96} />
        </div>
        <Footer />
      </>
    );
  }

  if (!product && !productLoading && isRouterReady) {
    return (
      <>
        <Navigation />
        <div
          className={styles.container}
          style={{ textAlign: "center", paddingTop: "100px" }}
        >
          <h1>Product not found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <a href="/#featured-products" className="btn btn-primary">
            Voltar ao catalogo
          </a>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Head>
          <title>Produto - KzaVerde</title>
          <meta property="og:title" content="Produto - KzaVerde" />
          <meta
            property="og:description"
            content="Detalhes do produto da KzaVerde"
          />
        </Head>
        <Navigation />
        <div
          className={styles.container}
          style={{ textAlign: "center", paddingTop: "100px" }}
        >
          <img src="/loader.svg" alt="Carregando" width={96} height={96} />
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
                productId={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
                description={product.description}
              />

              <ProductCare instructions={product.careInstructions} />

              <ProductOptions
                // onSizeChange={setSize} // Commented for now
                // onTypeChange={setType} // Commented for now
                onQuantityChange={setQuantity}
                onOrderDetailsChange={setOrderDetails}
                onShippingAddressChange={setShippingAddress}
                // initialSize={size} // Commented for now
                // initialType={type} // Commented for now
                initialQuantity={quantity}
                initialOrderDetails={orderDetails}
                initialShippingAddress={shippingAddress}
              />

              <ProductActions
                productName={product.name}
                productPrice={product.price}
                // size={size} // Commented for now
                // type={type} // Commented for now
                quantity={quantity}
                orderDetails={orderDetails}
                shippingAddress={shippingAddress}
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
