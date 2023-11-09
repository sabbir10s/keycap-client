import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useProductContext } from "../../../context/ProductContext";
import Loading from "../../Loading";
import ProductCard from "../../Product/ProductCard/ProductCard";
import Button from "../../../shared/Button/Button";

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/products");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pt-8 pb-20">
      <div className="text-center py-8">
        <h2
          id="products"
          className="text-primary-700 text-2xl lg:text-3xl font-bold "
        >
          Featured Products
        </h2>
        <p className="tracking-wide text-gray-400 text-base pt-2 font-thin">
          See our featured products below. Choose your needs <br /> from here
          and get a special discount with free shipping.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10 mt-5">
        {featureProducts.map((product) => (
          <ProductCard
            id="#new"
            key={product._id}
            product={product}
          ></ProductCard>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <Button
          className="flex items-center gap-1"
          id={"View All Products"}
          category={"secondary"}
          type={"button"}
          isDisabled={false}
          onClick={handleButton}
        >
          View All Products
          <AiOutlineArrowRight className="text-xl" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
