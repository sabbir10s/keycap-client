import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";

const EditProduct = ({ product }) => {
  const { _id, name, image, price, description, quantity } = product;
  const getName = useRef(null);
  const getPrice = useRef(null);
  const getDescription = useRef(null);
  const getQuantity = useRef(null);

  const handleProfile = (event) => {
    event.preventDefault();
    const name = getName.current.value;
    const userInfo = {
      name,
      image,
      price,
      description,
      quantity,
    };

    const url = `https://nexiq-server.vercel.app/product/${_id}`;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.acknowledged) {
          toast.success("Product Updated");
          //   refetch();
        } else {
          toast.secondary("Failed to update");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label
        htmlFor="my-modal-4"
        className="modal cursor-pointer modal-bottom sm:modal-middle"
      >
        <label className="modal-box relative" htmlFor="">
          <input
            className="border-b border-gray-400 text-lg w-full py-1 focus:outline-0"
            type="text"
            name="name"
            ref={getName}
            defaultValue={name || ""}
          />
          <input
            className="border-b border-gray-400 text-lg w-full py-1 focus:outline-0"
            type="number"
            name="price"
            ref={getPrice}
            defaultValue={price || ""}
          />
          <input
            className="border-b border-gray-400 text-lg w-full py-1 focus:outline-0"
            type="number"
            name="quantity"
            ref={getQuantity}
            defaultValue={quantity || ""}
          />
        </label>
      </label>
    </div>
  );
};

export default EditProduct;
