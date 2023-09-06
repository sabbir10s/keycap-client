import React from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = ({ visible, handleMobileSidebar }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === "containers") handleMobileSidebar();
  };

  if (!visible) {
    return null;
  }
  return (
    <button
      onClick={handleCloseModal}
      id="containers"
      className="lg:hidden z-30 fixed inset-0 bg-black bg-opacity-30 "
    >
      <div className="h-screen pt-20 bg-gray-100 w-64">
        <Sidebar handleMobileSidebar={handleMobileSidebar} />
      </div>
    </button>
  );
};

export default MobileSidebar;
