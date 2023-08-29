import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import ProductCard from "../../../components/ProductCard";

const TrendingProducts = () => {
  const { data: products, isLoading } = useQuery(["products"], () =>
    fetch("https://nexiq-server.vercel.app/product", {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pt-8 pb-20">
      <div className="text-center py-8">
        <h2
          id="products"
          className="text-primary text-2xl lg:text-3xl font-bold "
        >
          Trending Products
        </h2>
        <p className="tracking-wide text-gray-400 text-base pt-2 font-thin">
          See our trending products below. Choose your needs <br /> from here
          and get a special discount with free shipping.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10 mt-5">
        {products.slice(0, 8).map((product) => (
          <ProductCard
            id="#new"
            key={product._id}
            product={product}
            products={products}
          ></ProductCard>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <Link
          to="/products"
          className="bg-secondary text-base-100 px-8 py-3 rounded shadow-md shadow-base-300/50"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default TrendingProducts;
