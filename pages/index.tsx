import React, { FC } from "react";
import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import FeaturedProductsSection from "../components/home/FeaturedProductsSection";
import ReserveCTASection from "../components/home/ReserveCTASection";
import InspirationSection from "../components/home/InspirationSection";
import HomepageScripts from "../components/home/HomepageScripts";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import brandLogo from "../assets/logo_transparent/1.png";
import navLogo from "../assets/logo_transparent/3.png";

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
        <Navigation brandImageSrc={navLogo} brandImageAlt="KzaVerde" />
        <HeroSection brandImageSrc={brandLogo} brandImageAlt="KzaVerde" />
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
