import React, { FC } from "react";
import Head from "next/head";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import HeroSection from "../components/home/HeroSection";
import FeaturedProductsSection from "../components/home/FeaturedProductsSection";
import ReserveCTASection from "../components/home/ReserveCTASection";
import InspirationSection from "../components/home/InspirationSection";
import HomepageScripts from "../components/home/HomepageScripts";

const Home: FC = () => {
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
        </Head>
        <Navigation></Navigation>
        <HeroSection />
        <FeaturedProductsSection />
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

export default Home;
