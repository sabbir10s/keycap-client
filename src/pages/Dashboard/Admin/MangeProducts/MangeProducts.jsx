import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import Pagination from "../../../../shared/Pagination";
import Search from "../../../../components/Search";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loading from "../../../../components/Loading";

const MangeProducts = () => {
  const [products, setProducts] = useState([]);
  const [reload, setIsReload] = useState(true);
  // console.log(reload);
  useEffect(() => {
    const url = "https://nexiq-server.vercel.app/product";
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [reload]);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsOffset, setItemsOffset] = useState(0);
  const itemsPerPage = 5;

  if (!products.length) {
    return <Loading />;
  }

  return (
    <div className="mt-4">
      <div className="mb-4 flex items-center justify-between">
        <Search />
        <Link
          to="addNewProduct"
          className="flex items-center gap-2 bg-primary-600 px-4 py-3 md:p-2 rounded-md text-white"
        >
          <AiOutlinePlus />
          <span className="hidden md:block">Add Product</span>
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-700 border-[1px] border-gray-200/80 dark:border-gray-600 rounded-[10px] shadow-custom">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-600 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
                <thead className="bg-gray-50 dark:bg-gray-900 dark:text-gray-300">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Sale Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Published
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-500">
                  {currentItems.map((product, index) => (
                    <ProductRow
                      index={index}
                      product={product}
                      setProducts={setProducts}
                      key={product._id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-gray-900 dark:text-gray-300 flex flex-col md:flex-row gap-6 justify-between items-center w-full pl-[15px] pr-[30px] py-6 text-sm">
          <p className="uppercase font-semibold">
            showing ({itemsOffset + 1}- {itemsOffset + currentItems.length}) of{" "}
            {products.length}
          </p>
          <Pagination
            pageCount={pageCount}
            setPageCount={setPageCount}
            itemsOffset={itemsOffset}
            setItemsOffset={setItemsOffset}
            setCurrentItems={setCurrentItems}
            itemsPerPage={itemsPerPage}
            items={products}
          />
        </div>
      </div>
    </div>
  );
};

export default MangeProducts;
