import React from "react";

const ProductInputField = ({ register, errors }) => {
  return (
    <div>
      <div className=" w-full">
        <label className="block text-sm">
          <span>Product Name</span>
        </label>
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
          {...register("name", {
            required: {
              value: true,
              message: "Product Name is Required",
            },
          })}
        />
        <label className="block text-sm">
          {errors.name?.type === "required" && (
            <span className="label-text-alt text-error">
              {errors.name.message}
            </span>
          )}
        </label>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10">
        <div className=" w-full">
          <label className="block text-sm">
            <span>Category</span>
          </label>

          <select
            className="border border-primary-700 p-[8px] rounded-md focus:outline-secondary"
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

          <label className="block text-sm">
            {errors.category?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.category?.message}
              </span>
            )}
          </label>
        </div>

        <div className=" w-full">
          <label className="block text-sm">
            <span>Price</span>
          </label>
          <input
            type="number"
            placeholder="Product Price"
            className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
            {...register("price", {
              required: {
                value: true,
                message: "Product price is required",
              },
            })}
          />
          <label>
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10">
        <div className=" w-full">
          <label className="block text-sm">
            <span>Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Product Quantity"
            className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
            {...register("quantity", {
              required: {
                value: true,
                message: "Product quantity is required",
              },
            })}
          />
          <label>
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        <div className=" w-full">
          <label className="block text-sm">
            <span>Minimum Order</span>
          </label>
          <input
            type="number"
            placeholder="Minimum Order"
            className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
            {...register("minOrder", {
              required: {
                value: true,
                message: "Minimum order quantity is required",
              },
            })}
          />
          <label>
            {errors.minOrder?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.minOrder.message}
              </span>
            )}
          </label>
        </div>
      </div>

      <div className="">
        <label className="block text-sm">
          <span>Description</span>
        </label>
        <textarea
          rows="3"
          cols="50"
          placeholder="Product Description"
          className="border border-primary-700 p-[7px] rounded-md focus:outline-secondary"
          {...register("description", {
            required: {
              value: true,
              message: "Product description is Required",
            },
          })}
        />
        <label>
          {errors.description?.type === "required" && (
            <span className="label-text-alt text-error">
              {errors.description.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default ProductInputField;
