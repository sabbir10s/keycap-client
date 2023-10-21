import React from "react";
import { useFilterContext } from "../../context/FilterContext";
import FormatePrice from "../../helper/FormatePrice";

const ProductFilters = () => {
  const {
    all_products,
    updateFilterValue,
    filters: { category, company, price, maxPrice, minPrice },
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
                className="flex pb-3"
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
        <form className="relative block w-36" action="#">
          <select
            onClick={updateFilterValue}
            name="company"
            id="company"
            className="appearance-none block border-[1px] border-gray-400 dark:border-gray-700 dark:focus:border-gray-300 px-3 py-1 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 text-sm leading-6 outline-none duration-300 w-full"
          >
            {companyNames.map((curElm, idx) => {
              return (
                <option key={idx} value={curElm} name="company">
                  {curElm}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 md:px-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-gray-700 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </form>
      </div>
      <button
        className=" bg-rose-700 text-white py-2 px-4"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default ProductFilters;
