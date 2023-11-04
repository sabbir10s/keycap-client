import React from "react";
import Footer from "../../components/Footer";
import Banner from "./Banner/Banner";
import ContactFrom from "./ContactFrom/ContactFrom";
import OurService from "./OurService/OurService";
import Reviews from "./Reviews/Reviews";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedProducts />
      </div>
      <OurService />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reviews />
      </div>

      <ContactFrom />
      <Footer />
    </div>
  );
};

export default Home;
