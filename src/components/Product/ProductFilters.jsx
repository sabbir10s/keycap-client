import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import FormatePrice from "../../helper/FormatePrice";

const ProductFilters = () => {
  const {
    all_products,
    updateFilterValue,
    filters: { company, category, price, maxPrice, minPrice },
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    return (newValue = ["all", ...new Set(newValue)]);
  };

  const categoryNames = getUniqueData(all_products, "category");
  const companyNames = getUniqueData(all_products, "company");

  return (
    <div className="hidden md:flex flex-col gap-3 md:col-span-1">
      <div className="bg-white p-3 shadow-sm">
        <h2 className="text-base text-primary-700 font-semibold xl:border-l-2 border-primary-700 xl:pl-2 mb-3">
          Price
        </h2>
        <div>
          <p>
            <FormatePrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
      </div>
      <div className="bg-white p-3 shadow-sm">
        <h2 className="text-base text-primary-700 font-semibold xl:border-l-2 border-primary-700 xl:pl-2  mb-3">
          Product Category
        </h2>
        <div>
          {categoryNames.map((curElm, idx) => {
            return (
              <button
                className={
                  category === curElm
                    ? "flex pb-3 text-primary-600 capitalize"
                    : "flex pb-3 capitalize"
                }
                onClick={updateFilterValue}
                value={curElm}
                key={idx}
                type="button"
                name="category"
              >
                {curElm}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white p-3 shadow-sm">
        <h2 className="text-base text-primary-700 font-semibold xl:border-l-2 border-primary-700 xl:pl-2  mb-3">
          Company
        </h2>
        <div>
          {companyNames.map((curElm, idx) => (
            <label key={idx} className="flex items-center pb-3 capitalize">
              <input
                type="checkbox"
                name="company"
                value={curElm}
                onChange={updateFilterValue}
                checked={curElm === company}
              />
              <span className="ml-2">{curElm}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        className=" bg-secondary-500 text-white py-2 px-4"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFilters;
