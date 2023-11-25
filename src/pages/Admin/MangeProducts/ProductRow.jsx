import { useState } from "react";
import { toast } from "react-toastify";
import { MdOutlineEditNote } from "react-icons/md";
import Modal from "../../../shared/Modal";
import ProductQuickDetails from "../../../components/ProductQuickDetails";
import DeleteModal from "../../../shared/DeleteModal";
import { useDeleteModalContext } from "../../../context/DeleteModalContext";

const ProductRow = ({ setProducts, product, setIsReload, reload }) => {
  const { isDeleteModal, openDeleteModal, closeDeleteModal } =
    useDeleteModalContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (productIdToToggle) => {
    setProducts((prevState) =>
      prevState.map((product) => {
        if (product._id === productIdToToggle) {
          console.log(!product.isOn);
          return { ...product, published: !product.published };
        } else {
          return product;
        }
      })
    );
  };

  const handleDelete = () => {
    const url = `https://nexiq-server.vercel.app/product/${product._id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          closeDeleteModal();
          toast.success("Successfully Deleted");
          setIsReload(!reload);
        }
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <tr key={product._id} className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full hidden md:block"
            src={product.image}
            alt=""
          />
          <button className="hover:underline" type="button" onClick={openModal}>
            {product.name}
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  capitalize">
          {product.category}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  capitalize">
          ${product.price}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize font-semibold">
          ${product.sellingPrice}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize font-semibold">
          {product.stock}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500  capitalize">
          {product.published && (
            <span className="bg-green-100 text-green-500 text-[14px] px-[6px] py-[2px] rounded-full">
              Published
            </span>
          )}
          {!product.published && (
            <span className="bg-accent-100 text-accent-500 text-[14px] px-[6px] py-[1px] rounded-full">
              Pending
            </span>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
          <button
            className={`relative inline-flex items-center h-4 rounded-full w-8 focus:outline-none ${
              product.published ? "bg-primary-500" : "bg-gray-300"
            }`}
            onClick={() => toggle(product._id)}
          >
            <span
              className={`inline-block w-4 h-4 transform transition ${
                product.published ? "translate-x-5" : "translate-x-0"
              } bg-white rounded-full`}
            />
          </button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm  flex items-start gap-2">
          <button className="hidden relative flex-col items-center group text-gray-400">
            <MdOutlineEditNote className="text-xl" />
            <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                Edit
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
            </div>
          </button>

          <button
            onClick={openDeleteModal}
            className="relative flex flex-col items-center group text-gray-400 text-lg hover:text-red-500 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-red-500 shadow-lg">
                Delete
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-red-500"></div>
            </div>
          </button>
        </td>
      </tr>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ProductQuickDetails product={product} />
      </Modal>

      <DeleteModal isDeleteModal={isDeleteModal} onClose={closeDeleteModal}>
        <div className="max-w-[500px] py-2 text-left">
          <h3 className="text-base md:text-lg font-semibold">
            Are you sure you wanna delete this product?
          </h3>

          <p className="text-gray-400 text-xs md:text-sm pt-2">
            This will delete the product permanently. You cannot undo this
            action.
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
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </DeleteModal>
    </>
  );
};

export default ProductRow;
