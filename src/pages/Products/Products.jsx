import Footer from "../../components/Footer";
import ProductList from "../../components/Product/ProductList";
import Sort from "../../components/Product/Sort";
import ProductFilters from "../../components/Product/ProductFilters";

const Products = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-5 ">
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
