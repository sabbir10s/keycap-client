import Footer from "../../components/Footer";
import ProductSidebar from "../../components/Product/ProductSidebar";
import ProductList from "../../components/Product/ProductList";
import Sort from "../../components/Product/Sort";

const Products = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-5 ">
          <ProductSidebar />
          <div className="col-span-3">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
