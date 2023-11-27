import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useProductContext } from "../../../context/ProductContext";
import Loading from "../../Loading";
import ProductCard from "../../Product/ProductCard/ProductCard";

const NewArrivals = () => {
  const { isLoading, products } = useProductContext();
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/products");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h2
            id="products"
            className="text-gray-700 text-lg md:text-xl lg:text-2xl font-semibold border-b-2 border-primary-600 inline-block tracking-wider pb-[8px]"
          >
            New Arrivals
          </h2>
          <button
            className="flex items-center gap-1 text-gray-500 hover:text-primary-600"
            type={"button"}
            onClick={handleButton}
          >
            View All
            <AiOutlineArrowRight className="text-xl" />
          </button>
        </div>
        <div className="border-t-[2px]"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-10 mt-5">
        {products.slice(0, 4).map((product) => (
          <ProductCard
            id="#new"
            key={product._id}
            product={product}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
