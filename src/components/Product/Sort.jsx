import React from "react";
import { AiOutlineUnorderedList, AiOutlineAppstore } from "react-icons/ai";
import { useFilterContext } from "../../context/FilterContext";
const Sort = () => {
  const { grid_view, setGridView, setListView, sorting } = useFilterContext();
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

      <input type="text" className="border pl-1.5 py-1" placeholder="Search" />
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
