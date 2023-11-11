import React, { useEffect } from "react";
import Payment from "../../../components/Order/Payment/Payment";

const PaymentModal = ({
  isPaymentCart,
  onClose,
  order,
  setIsReload,
  reload,
}) => {
  useEffect(() => {
    if (isPaymentCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPaymentCart]);

  if (!isPaymentCart) {
    return null;
  }
  return (
    <div>
      {isPaymentCart && (
        <div className="fixed flex items-center justify-center inset-0 z-50">
          <div
            id="paymentContainer"
            className="absolute inset-0 bg-black opacity-50"
          ></div>
          <div className="bg-white rounded-lg dark:bg-gray-800 p-4 w-full md:w-1/2 lg:w-1/3 z-10 overflow-auto relative">
            <button
              type="button"
              className="absolute right-1 top-1 text-white bg-gray-400 rounded-full dark:text-gray-300 p-2 z-50"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div>
              <Payment
                order={order}
                reload={reload}
                setIsReload={setIsReload}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
