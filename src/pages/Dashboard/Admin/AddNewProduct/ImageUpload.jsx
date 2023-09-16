import React from "react";
import { RiImageAddFill } from "react-icons/ri";

const ImageUpload = ({ register, errors }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
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

        <input
          type="submit"
          value="Upload Product"
          className="bg-primary-700 text-gray-100 text-lg py-3 w-full rounded-md shadow shadow-secondary cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ImageUpload;
