// ModalContext.js

import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const DeleteModalProvider = ({ children }) => {
  const [isDeleteModal, setDeleteModal] = useState(false);

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ isDeleteModal, openDeleteModal, closeDeleteModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useDeleteModalContext = () => {
  return useContext(ModalContext);
};
