import React from "react";
import { useCartContext } from "../../context/CartContext";
import FormatePrice from "../../helper/FormatePrice";
import CartAmountToggle from "./CartAmountToggle";
import { useDeleteModalContext } from "../../context/DeleteModalContext";
import DeleteModal from "../../shared/DeleteModal";

const CartItem = ({ item }) => {
  const { isDeleteModal, openDeleteModal, closeDeleteModal } =
    useDeleteModalContext();
  const { removeItem, setIncrease, setDecrease } = useCartContext();
  const { _id, name, image, price, amount } = item;
  const handleRemoveCartItem = () => {
    removeItem(_id);
    closeDeleteModal();
  };
  return (
    <div>
      <div className="flex justify-between items-center lg:grid  grid-cols-7 lg:gap-2 lg:m-[7px] bg-white">
        <div className="flex items-center lg:col-span-3">
          <div className="p-2">
            <div className="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] bg-gray-50  rounded-2xl">
              <img
                src={image}
                className="w-full h-full object-center object-fill"
                alt="product-img"
              />
            </div>
          </div>
          <div className="hidden lg:block w-2/3">{name}</div>
        </div>
        <div className="flex flex-col lg:mx-auto text-[12px] md:text-base">
          <h2 className="lg:hidden ">{name.slice(0, 16)}...</h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
            <p className="text-primary-600 lg:text-gray-600  font-semibold">
              <FormatePrice price={price} />
            </p>
            <p className="text-gray-600 lg:hidden">
              <del>${}.00</del>
            </p>
          </div>
        </div>

        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrease(_id)}
          setIncrease={() => setIncrease(_id)}
        />
        <h2 className=" font-semibold text-primary-600 hidden lg:block mx-auto">
          <FormatePrice price={price * amount} />
        </h2>
        <button onClick={openDeleteModal} className="lg:mx-auto pr-2 lg:pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" w-4 lg:w-6  h-4 lg:h-6 inline-block text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>

      <DeleteModal isDeleteModal={isDeleteModal} onClose={closeDeleteModal}>
        <div className="max-w-[500px] py-2 text-left">
          <h3 className="text-base md:text-lg font-semibold">
            Are you sure you want to remove this item?
          </h3>

          <p className="text-gray-400 text-xs md:text-sm pt-2">
            This action will permanently remove the selected item from your
            cart. Please note that this action cannot be undone.
          </p>
          <div className="flex justify-end mt-6">
            <button
              className="text-gray-400 px-4 py-1 rounded"
              onClick={closeDeleteModal}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white px-4 py-1 rounded"
              onClick={handleRemoveCartItem}
            >
              Remove
            </button>
          </div>
        </div>
      </DeleteModal>
    </div>
  );
};

export default CartItem;
