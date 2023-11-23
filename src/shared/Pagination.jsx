import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  pageCount,
  setPageCount,
  setCurrentItems,
  itemsOffset,
  setItemsOffset,
  itemsPerPage,
  items,
}) => {
  useEffect(() => {
    const endOffset = itemsOffset + itemsPerPage;
    setCurrentItems(items.slice(itemsOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemsOffset, itemsPerPage, items, setCurrentItems, setPageCount]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemsOffset(newOffset);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={3}
      containerClassName="flex gap-1"
      pageLinkClassName="px-4 py-2 focus:outline-none"
      activeLinkClassName="px-4 py-2 rounded-lg bg-primary-600 text-white"
      previousLinkClassName="px-4 py-2"
      nextLinkClassName="px-4 py-2"
      breakLinkClassName="px-4 py-2 rounded-lg bg-white text-gray-800 hover:bg-gray-200"
      disabledClassName="opacity-50 cursor-not-allowed"
      disabledLinkClassName="cursor-not-allowed"
      activeClassName=""
    />
  );
};

export default Pagination;
