import { FaWallet, FaRegCreditCard } from "react-icons/fa";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="bg-white rounded-xl p-5">
      <h3 className="text-xl mb-5 font-semibold">3. Payment Method</h3>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <button
          type="button"
          onClick={() => setPaymentMethod("cash")}
          className="flex items-center gap-2 text-gray-500 border rounded p-3 w-full"
        >
          <FaWallet />
          <span className="flex items-center justify-between w-full">
            <span>Cash On Delivery</span>
            <span
              className={`${
                paymentMethod === "cash"
                  ? " w-5 h-5 border border-gray-400 rounded-full bg-primary-600"
                  : "w-5 h-5 border border-gray-400 rounded-full"
              } `}
            ></span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("card")}
          className="flex items-center gap-2 text-gray-500 border rounded p-3 w-full"
        >
          <FaRegCreditCard />
          <span className="flex items-center justify-between w-full">
            <span>Credit Card</span>
            <span
              className={`${
                paymentMethod === "card"
                  ? "w-5 h-5 border border-gray-400 rounded-full bg-primary-600"
                  : "w-5 h-5 border border-gray-400 rounded-full "
              } `}
            ></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
