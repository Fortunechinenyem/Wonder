import React from "react";
import Footer from "../components/Footer";
import HomeFeatures from "../components/HomeFeatures";
import HomeHero from "../components/HomeHero";

const Home = () => {
  return (
    <section>
      <HomeHero />
      <HomeFeatures />
      <Footer />
    </section>
  );
};

export default Home;
