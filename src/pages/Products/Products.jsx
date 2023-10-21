import Footer from "../../components/Footer";
import ProductList from "../../components/Product/ProductList";
import Sort from "../../components/Product/Sort";
import ProductFilters from "../../components/Product/ProductFilters";

const Products = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto lg:px-8 lg:py-6">
        <div className="grid md:grid-cols-4 gap-3 lg:gap-5 ">
          <ProductFilters />
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
