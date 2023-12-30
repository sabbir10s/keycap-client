import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputFields from "./InputFields";
import { RiImageAddFill } from "react-icons/ri";
import { useState } from "react";
import Extra from "./Extra";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "46852d765f11248a385285a8456eb942";
  const [published, setPublished] = useState(true);
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            category: data.category,
            company: data.company,
            price: parseInt(data.price),
            quantity: parseInt(data.quantity),
            sellingPrice: parseInt(data.sellingPrice),
            description: data.description,
            image: img,
            published: published,
          };
          // send to your database.
          fetch("https://keycap-server.vercel.app/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add Product");
              }
            });
        }
      });
  };

  return (
    <div className="mx-2 lg:mx-0">
      <p className="text-lg font-bold text-primary-700 text-left py-2">
        Add Product
      </p>
      <div>
        <form
          className="flex flex-col md:flex-row gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="bg-white shadow-sm border p-6 w-full">
            <InputFields register={register} errors={errors} />
          </div>
          <div className="bg-white shadow-sm border p-6 w-full">
            <div className=" w-full">
              <label className="block text-sm font-medium leading-6 text-gray-700 ">
                <span>Company</span>
              </label>
              <input
                autoComplete="off"
                type="text"
                placeholder="Company Name"
                className="block w-full rounded-md border-[1px] border-gray-100   p-3  bg-[#f4f5f7]  focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
                {...register("company", {
                  required: {
                    value: true,
                    message: "Company Name is Required",
                  },
                })}
              />
              <label className="block text-sm font-medium leading-6 text-gray-700 ">
                {errors.company?.type === "required" && (
                  <span className="text-xs text-red-400">
                    {errors.company.message}
                  </span>
                )}
              </label>
            </div>
            {/* <div className="flex flex-col gap-4">
              <div className=" w-full cursor-pointer">
                <div className=" cursor-pointer flex items-center justify-center gap-2 border border-primary-700 bg-slate-100 rounded-lg py-1 mt-2">
                  <label className="label cursor-pointer pt-0" htmlFor="image">
                    <span className="text-4xl text-base-300">
                      <RiImageAddFill />
                    </span>
                  </label>
                  <input
                    type="file"
                    id="image"
                    multiple
                    className="text-base-300 lg:w-[250px] cursor-pointer"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is Required",
                      },
                    })}
                  />
                </div>

                <label className="block text-SM">
                  {errors.image?.type === "required" && (
                    <span className="text-xs text-red-400">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>
            </div> */}
            <Extra />
            <div className="flex items-center">
              <p>Publish</p>
              <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  capitalize">
                <button
                  type="button"
                  className={`relative inline-flex items-center h-4 rounded-full w-8 focus:outline-none ${
                    published ? "bg-primary-500" : "bg-gray-300"
                  }`}
                  onClick={() => setPublished(!published)}
                >
                  <span
                    className={`inline-block w-4 h-4 transform transition ${
                      published ? "translate-x-5" : "translate-x-0"
                    } bg-white rounded-full`}
                  />
                </button>
              </div>
            </div>
            <input
              type="submit"
              value="Upload Product"
              className="bg-primary-700 text-gray-100 text-lg px-4 py-2 w-full rounded-md shadow shadow-secondary cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
