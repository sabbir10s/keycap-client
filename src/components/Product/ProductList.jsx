import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import ProductCard from "../ProductCard";
import ProductCartFullWidth from "./ProductCartFullWidth";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  // Grid view product list
  if (grid_view) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 mt-3 shadow-sm">
        {filter_products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    );
  }
  // List view product list
  if (!grid_view) {
    return (
      <div className="mt-3 shadow-sm">
        {filter_products.map((product) => (
          <ProductCartFullWidth product={product} key={product._id} />
        ))}
      </div>
    );
  }
};

export default ProductList;
