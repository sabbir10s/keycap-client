import Footer from "../../components/Footer";
import { useFilterContext } from "../../context/FilterContext";
import ProductSidebar from "../../components/Product/ProductSidebar";
import ProductTop from "../../components/Product/ProductTop";
import ProductList from "../../components/Product/ProductList";

const Products = () => {
  const { filter_products } = useFilterContext();
  console.log(filter_products);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-5 ">
          <ProductSidebar />
          <div className="col-span-3">
            <ProductTop />
            <ProductList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
