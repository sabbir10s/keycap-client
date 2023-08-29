import React from "react";
import Footer from "../../components/Footer";
import Banner from "./Banner/Banner";
import ContactFrom from "./ContactFrom/ContactFrom";
import OurService from "./OurService/OurService";
import Reviews from "./Reviews/Reviews";
import TrendingProducts from "./TrendingProducts/TrendingProducts";

const Home = () => {
  return (
    <div className="bg-gray-100/70">
      <Banner />
      <div className="container mx-auto px-2">
        <TrendingProducts />
      </div>
      <OurService />
      <div className="container mx-auto px-2">
        <Reviews />
      </div>

      <ContactFrom />
      <Footer />
    </div>
  );
};

export default Home;
