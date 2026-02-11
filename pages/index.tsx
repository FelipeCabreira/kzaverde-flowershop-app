import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { FC } from "react";
import brandLogo from "../assets/logo_transparent/1.png";
import FeaturedProductsSection from "../components/home/FeaturedProductsSection";
import HeroSection from "../components/home/HeroSection";
import InspirationSection from "../components/home/InspirationSection";
import ReserveCTASection from "../components/home/ReserveCTASection";
import { getAllProducts, Product } from "../lib/db";
const HomepageScripts = dynamic(
  () => import("../components/home/HomepageScripts"),
  { ssr: false },
);

interface HomeProps {
  products: Product[];
}

const Home: FC<HomeProps> = ({ products }) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>KzaVerde</title>
          <meta property="og:title" content="KzaVerde" />
          <link
            rel="canonical"
            href="https://worthwhile-bewitched-tapir-xn2j0r.teleporthq.app/"
          />
          <link
            rel="preload"
            as="image"
            href="https://images.pexels.com/videos/4191603/pictures/preview-0.jpg"
            fetchPriority="high"
          ></link>
          <link rel="dns-prefetch" href="https://images.pexels.com"></link>
        </Head>
        <Navigation brandImageAlt="KzaVerde" />
        <HeroSection brandImageSrc={brandLogo} brandImageAlt="KzaVerde" />
        <FeaturedProductsSection products={products} />
        <ReserveCTASection />
        <InspirationSection />
        <HomepageScripts />
        <Footer />
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const products = getAllProducts();

  return {
    props: { products },
    revalidate: 60,
  };
};

export default Home;
