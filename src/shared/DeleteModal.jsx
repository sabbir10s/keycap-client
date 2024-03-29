import React, { useEffect } from "react";

const DeleteModal = ({ children, isDeleteModal, onClose }) => {
  const handleCloseDeleteModal = (e) => {
    if (e.target.id === "deleteModalContainer") onClose();
  };

  useEffect(() => {
    if (isDeleteModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDeleteModal]);

  if (!isDeleteModal) {
    return null;
  }

  return (
    <button className="cursor-default" onClick={handleCloseDeleteModal}>
      <div>
        {isDeleteModal && (
          <div className="fixed flex items-center justify-center inset-0 z-50">
            <div
              id="deleteModalContainer"
              className="absolute inset-0 bg-black/20"
            ></div>
            <div className="bg-white rounded-lg mx-3 p-4 lg:p-8 h-auto max-w-sm md:max-w-2xl lg:max-w-5xl z-10 overflow-auto relative">
              <div>{children}</div>
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default DeleteModal;
