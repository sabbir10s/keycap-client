import React from "react";
import Questions from "../../../components/FAQ/Questions";
import FaqForm from "../../../components/FAQ/FaqForm";
import Footer from "../../../components/Footer";

const FAQ = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className=" md:py-10 mb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Questions />
          <FaqForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
