import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { FC, useState } from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import ProductActions from "../../components/product-detail/ProductActions";
import ProductCare from "../../components/product-detail/ProductCare";
import styles from "../../components/product-detail/ProductDetail.module.scss";
import ProductGallery from "../../components/product-detail/ProductGallery";
import ProductHeader from "../../components/product-detail/ProductHeader";
import ProductOptions from "../../components/product-detail/ProductOptions";
import { getAllProducts, getProductById, Product } from "../../lib/db";
const SimilarProducts = dynamic(
  () => import("../../components/product-detail/SimilarProducts"),
);

interface ProductDetailProps {
  product: Product;
  similarProducts: Product[];
}

const ProductDetail: FC<ProductDetailProps> = ({
  product,
  similarProducts,
}) => {
  // const [size, setSize] = useState<string>("Small"); // Commented for now
  // const [type, setType] = useState<string>("Bouquet"); // Commented for now
  const [quantity, setQuantity] = useState<number>(1);
  const [orderDetails, setOrderDetails] = useState<string>("");
  const [shippingAddress, setShippingAddress] = useState<string>("");

  if (!product) return null;

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

export const getStaticPaths: GetStaticPaths = async () => {
  const products = getAllProducts();

  return {
    paths: products.map((product) => ({
      params: { id: String(product.id) },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ProductDetailProps> = async (
  context,
) => {
  const idParam = context.params?.id;
  const productId = parseInt(
    Array.isArray(idParam) ? idParam[0] : String(idParam),
    10,
  );

  if (!productId) {
    return { notFound: true };
  }

  const products = getAllProducts();
  const product = getProductById(productId);

  if (!product) {
    return { notFound: true };
  }

  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return {
    props: {
      product,
      similarProducts,
    },
    revalidate: 60,
  };
};

export default ProductDetail;
