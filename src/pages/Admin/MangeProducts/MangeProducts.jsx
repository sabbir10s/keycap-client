import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import Search from "../../../components/Search";
import Pagination from "../../../shared/Pagination";
const title = [
  " Product",
  "Category",
  "Price",
  "Sale Price",
  "Stock",
  "Status",
  "Publish",
  "Action",
];
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
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
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
    <div className="mt-4 lg:mt-0 px-2 lg:px-0">
      <div className="mb-4 flex gap-4 items-center justify-between bg-white p-3">
        <Search />
        <Link
          to="addNewProduct"
          className="flex items-center gap-2 bg-secondary-400 px-4 py-2 text-white"
        >
          <FiPlus />
          <span className="hidden md:block">Add Product</span>
          <span className="block md:hidden">New</span>
        </Link>
      </div>
      <div className="bg-white border-[1px] border-gray-200/80">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    {title.map((item, idx) => (
                      <th
                        key={idx}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white bg-primary-600  uppercase tracking-wider"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {currentItems.map((product, index) => (
                    <ProductRow
                      index={index}
                      product={product}
                      setProducts={setProducts}
                      reload={reload}
                      setIsReload={setIsReload}
                      key={product._id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="text-gray-700 flex flex-col md:flex-row gap-6 justify-between items-center w-full pl-[15px] pr-[30px] py-6 text-sm">
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
