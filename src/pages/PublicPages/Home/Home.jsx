import React from "react";
import Banner from "../../../components/Home/Banner/Banner";
import FeaturedProducts from "../../../components/Home/FeaturedProducts/FeaturedProducts";
import OurService from "../../../components/Home/OurService/OurService";
import Footer from "../../../components/Footer";
import NewArrivals from "../../../components/Home/NewArrivals/NewArrivals";
import RecentBlog from "../../../components/Home/RecentBlog/RecentBlog";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8 mt-8 lg:mt-16">
        <NewArrivals />
      </div>
      <div className="mt-8 lg:mt-16">
        <OurService />
      </div>
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8 mt-8 lg:mt-16">
        <FeaturedProducts />
      </div>
      {/* <ContactFrom /> */}
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8 mt-8 lg:mt-16">
        <RecentBlog />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
