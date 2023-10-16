import React from "react";
import { AiOutlineUnorderedList, AiOutlineAppstore } from "react-icons/ai";
import { useFilterContext } from "../../context/FilterContext";
const Sort = () => {
  const { grid_view, setGridView, setListView } = useFilterContext();
  return (
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
  );
};

export default Sort;
