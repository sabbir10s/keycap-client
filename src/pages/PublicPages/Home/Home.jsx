import React from "react";
import Banner from "../../../components/Home/Banner/Banner";
import FeaturedProducts from "../../../components/Home/FeaturedProducts/FeaturedProducts";
import OurService from "../../../components/Home/OurService/OurService";
import Footer from "../../../components/Footer";
import NewArrivals from "../../../components/Home/NewArrivals/NewArrivals";
import RecentBlog from "../../../components/Home/RecentBlog/RecentBlog";

const Home = () => {
  return (
    <div className=" space-y-14">
      <Banner />
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <NewArrivals />
      </div>
      <OurService />
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <FeaturedProducts />
      </div>
      {/* <ContactFrom /> */}
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <RecentBlog />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
