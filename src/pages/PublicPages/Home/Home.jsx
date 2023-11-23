import React from "react";
import Banner from "../../../components/Home/Banner/Banner";
import FeaturedProducts from "../../../components/Home/FeaturedProducts/FeaturedProducts";
import OurService from "../../../components/Home/OurService/OurService";
import Reviews from "../../../components/Home/Reviews/Reviews";
import ContactFrom from "../../../components/Home/ContactFrom/ContactFrom";
import Footer from "../../../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <FeaturedProducts />
      </div>
      <OurService />
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <Reviews />
      </div>

      <ContactFrom />
      <Footer />
    </div>
  );
};

export default Home;
