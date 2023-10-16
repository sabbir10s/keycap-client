import React from "react";

const InputFields = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <div className=" w-full">
        <label className="block text-sm font-medium leading-6 text-gray-700 dark:text-white">
          <span>Product Name</span>
        </label>
        <input
          autoComplete="off"
          type="text"
          placeholder="Product Name"
          className="block w-full rounded-md border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
          {...register("name", {
            required: {
              value: true,
              message: "Product Name is Required",
            },
          })}
        />
        <label className="block text-sm font-medium leading-6 text-gray-700 dark:text-white">
          {errors.name?.type === "required" && (
            <span className="text-xs text-red-400">{errors.name.message}</span>
          )}
        </label>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10">
        <div className=" w-full">
          <label className="block text-sm font-medium leading-6 text-gray-700 dark:text-white">
            <span>Price</span>
          </label>
          <input
            type="number"
            placeholder="Product Price"
            className="block w-full rounded-md border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
            {...register("price", {
              required: {
                value: true,
                message: "Product price is required",
              },
            })}
          />
          <label>
            {errors.price?.type === "required" && (
              <span className="text-xs text-red-400">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>

        <div className=" w-full">
          <label className="block text-sm font-medium leading-6 text-gray-700 dark:text-white">
            <span>Selling</span>
          </label>
          <input
            type="number"
            placeholder="Selling Price"
            className="block w-full rounded-md border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
            {...register("sellingPrice", {
              required: {
                value: true,
                message: "Selling Price is required",
              },
            })}
          />
          <label>
            {errors.sellingPrice?.type === "required" && (
              <span className="text-xs text-red-400">
                {errors.sellingPrice.message}
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10">
        <div className=" w-full">
          <label className="block text-sm font-medium leading-6 text-gray-700 dark:text-white">
            <span>Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Product Quantity"
            className="block w-full rounded-md border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
            {...register("quantity", {
              required: {
                value: true,
                message: "Product quantity is required",
              },
            })}
          />
          <label>
            {errors.quantity?.type === "required" && (
              <span className="text-xs text-red-400">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>

        <div className=" w-full">
          <label className="block text-sm font-medium leading-6 text-gray-700 dark:text-white">
            <span>Category</span>
          </label>

          <select
            className="block w-full rounded-md border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
            {...register("category", {
              required: {
                value: true,
                message: "Product Category is Required",
              },
            })}
          >
            <option value="pc">PC Gadget</option>
            <option value="mobile">Mobile Gadget</option>
            <option value="smart">Smart Gadget</option>
          </select>

          <label className="block text-sm font-medium leading-6 text-gray-700 dark:text-white">
            {errors.category?.type === "required" && (
              <span className="text-xs text-red-400">
                {errors.category?.message}
              </span>
            )}
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-700 dark:text-white">
          <span>Description</span>
        </label>
        <textarea
          rows="5"
          cols="50"
          placeholder="Product Description"
          className="block w-full rounded-md border-[1px] border-gray-100 dark:border-gray-700 dark:focus:border-gray-300 p-3 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
          {...register("description", {
            required: {
              value: true,
              message: "Product description is Required",
            },
          })}
        />
        <label>
          {errors.description?.type === "required" && (
            <span className="text-xs text-red-400">
              {errors.description.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default InputFields;
