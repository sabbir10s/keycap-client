import React, { useEffect } from 'react';

const Modal = ({ children, isOpen, onClose }) => {
  const handleCloseModal = (e) => {
    if (e.target.id === 'modalContainer') onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <button className="cursor-default" onClick={handleCloseModal}>
      <div>
        {isOpen && (
          <div className="fixed flex items-center justify-center inset-0 z-50 ">
            <div
              id="modalContainer"
              className="absolute inset-0 bg-black opacity-50"
            ></div>
            <div className="bg-white dark:bg-gray-800 p-4 w-4/5 z-10 relative">
              <button
                className="absolute right-0 top-0 text-gray-600 dark:text-gray-300 p-4 z-50"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {children}
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default Modal;
