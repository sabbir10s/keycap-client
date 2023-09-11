const ProductRow = ({ setProducts, product, index }) => {
  const toggle = (productIdToToggle) => {
    setProducts((prevState) =>
      prevState.map((product) => {
        if (product._id === productIdToToggle) {
          return { ...product, isOn: !product.isOn };
        } else {
          return product;
        }
      })
    );
  };

  return (
    <tr
      key={product._id}
      className="hover:bg-gray-50 dark:hover:bg-gray-600/50"
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center gap-2">
        <img
          className="w-8 h-8 rounded-full hidden md:block"
          src={product.image}
          alt=""
        />
        <span>{product.name}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        {product.category}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        {product.price}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 capitalize font-semibold">
        {product.sale_price}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 capitalize font-semibold">
        {product.quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        {product.selling && (
          <span className="bg-success-100 text-success-500 text-[14px] px-[6px] py-[1px] rounded-full">
            selling
          </span>
        )}
        {!product.selling && (
          <span className="bg-accent-100 text-accent-500 text-[14px] px-[6px] py-[1px] rounded-full">
            Pending
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        <button
          className={`relative inline-flex items-center h-4 rounded-full w-8 focus:outline-none ${
            product.isOn ? "bg-primary-500" : "bg-gray-300"
          }`}
          onClick={() => toggle(product._id)}
        >
          <span
            className={`inline-block w-4 h-4 transform transition ${
              product.isOn ? "translate-x-5" : "translate-x-0"
            } bg-white rounded-full`}
          />
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-4">
        <div className="relative flex flex-col items-center group">
          <button className="text-gray-400 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-success-500 shadow-lg">
              View
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-success-500"></div>
          </div>
        </div>
        <div className="relative flex flex-col items-center group">
          <button className="text-gray-400 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-error-500 shadow-lg">
              Delete
            </span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-error-500"></div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
