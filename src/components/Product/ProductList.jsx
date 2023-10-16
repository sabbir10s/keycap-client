import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import ProductCard from "../ProductCard";
import ProductCartFullWidth from "./ProductCartFullWidth";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  // Grid view product list
  if (grid_view) {
    return (
      <div className="grid grid-cols-3">
        {filter_products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    );
  }
  // List view product list
  if (!grid_view) {
    return (
      <div>
        {filter_products.map((product) => (
          <ProductCartFullWidth product={product} key={product._id} />
        ))}
      </div>
    );
  }
};

export default ProductList;
