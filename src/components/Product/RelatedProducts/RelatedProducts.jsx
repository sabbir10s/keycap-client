import React from "react";
import { useProductContext } from "../../../context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../../Loading";

const RelatedProducts = ({ category }) => {
  const { products } = useProductContext();
  const relatedProducts = products.filter(
    (product) => product.category === category
  );
  console.log(relatedProducts);
  if (!category) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="pb-4 font-semibold text-lg">Related products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10">
        {relatedProducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
