import React from "react";
import { AiOutlineUnorderedList, AiOutlineAppstore } from "react-icons/ai";
import { useFilterContext } from "../../context/FilterContext";
const Sort = () => {
  const {
    grid_view,
    setGridView,
    setListView,
    sorting,
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <div className="flex items-center justify-between w-full bg-white p-3 shadow-sm">
      <div className="space-x-4 hidden md:block">
        <button
          onClick={setGridView}
          className={
            grid_view ? "bg-gray-500 text-white p-1 text-xl" : "p-1 text-xl"
          }
        >
          <AiOutlineAppstore />
        </button>
        <button
          onClick={setListView}
          className={
            !grid_view ? "bg-gray-500 text-white p-1 text-xl" : "p-1 text-xl"
          }
        >
          <AiOutlineUnorderedList />
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()} action="">
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          className="block w-full lg:w-64 border-[1px] border-gray-300 dark:border-gray-700 dark:focus:border-gray-300 py-1.5 pl-3 dark:text-white bg-gray-100/50 dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
          placeholder="Search"
          autoComplete="off"
        />
      </form>

      <div className="flex items-center gap-2">
        <span className="hidden md:block">Sort By:</span>
        <form className="relative  w-36 flex items-center" action="">
          <select
            onClick={sorting}
            name="sort"
            id="sort"
            className="appearance-none block border-[1px] border-gray-400 dark:border-gray-700 dark:focus:border-gray-300 px-3 py-1 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 text-sm leading-6 outline-none duration-300 w-full"
          >
            <option value="default">Default</option>
            <option value="lowest">Price (Low &lt; High)</option>
            <option value="highest">Price (High &gt; Low)</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 md:px-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-gray-700 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sort;
