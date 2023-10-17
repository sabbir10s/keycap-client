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
    <div className="flex items-center justify-between w-full">
      <div className="space-x-4">
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
          className="block w-full border-[1px] border-gray-200 dark:border-gray-700 dark:focus:border-gray-300 p-1.5 dark:text-white bg-[#f4f5f7] dark:bg-[#24262d] focus:bg-white placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none duration-300"
          placeholder="Search"
          autoComplete="off"
        />
      </form>
      <form action="">
        <label htmlFor="sort">Sort By:</label>
        <select onClick={sorting} name="sort" id="sort">
          <option value="default">Default</option>
          <option value="lowest">Price (Low &lt; High)</option>
          <option value="highest">Price (High &gt; Low)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
