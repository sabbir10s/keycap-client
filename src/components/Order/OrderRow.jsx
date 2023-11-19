import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormatePrice from "../../helper/FormatePrice";
import PaymentModal from "../../shared/Modal/PaymentModal/PaymentModal";

const OrderRow = ({ order, index }) => {
  const [isPaymentCart, setPaymentCart] = useState(false);
  const { _id, date, payment, status, totalAmount } = order;
  const navigate = useNavigate();
  const openPaymentCart = () => {
    setPaymentCart(true);
  };

  const closePaymentCart = () => {
    setPaymentCart(false);
  };

  const handleOrderDetails = () => {
    navigate(`/userDashboard/order/${_id}`);
  };
  const fieldStyle = "px-6 py-4 whitespace-nowrap text-sm  capitalize ";
  return (
    <>
      <tr className="text-gray-500 hover:bg-gray-100 duration-200  dark:text-gray-400 dark:hover:bg-gray-600/50 even:bg-white-100 odd:bg-gray-100/30">
        <td className={fieldStyle}>#{_id.slice(0, 4)}</td>
        <td className={fieldStyle}>{date}</td>
        <td className={fieldStyle}>{payment.method}</td>
        <td className={fieldStyle}>{status}</td>

        <td className={fieldStyle}>
          <FormatePrice price={totalAmount} />
        </td>
        <td className={fieldStyle}>
          {!payment.status ? (
            <button
              onClick={openPaymentCart}
              type="button"
              className="text-xs bg-primary-600 hover:bg-primary-700 duration-300 text-white px-2 py-1 rounded-full"
            >
              Pay Now
            </button>
          ) : (
            <span className="bg-green-400/10 text-[11px]  text-green-500 px-3 py-1 rounded-md leading-none font-medium text-end">
              Paid
            </span>
          )}
        </td>
        <td className={fieldStyle}>
          <button
            className="underline text-blue-600 hover:text-secondary-600 duration-300"
            onClick={handleOrderDetails}
          >
            Details
          </button>
        </td>
      </tr>
      <PaymentModal
        order={order}
        isPaymentCart={isPaymentCart}
        onClose={closePaymentCart}
      />
    </>
  );
};

export default OrderRow;
