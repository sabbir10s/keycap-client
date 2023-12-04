import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import OrderItems from "../../../components/Order/OrderItems";
import FormatePrice from "../../../helper/FormatePrice";
import OrderStatus from "../../../components/Order/OrderStatus";
import PaymentModal from "../../../shared/Modal/PaymentModal/PaymentModal";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [reload, setIsReload] = useState(true);
  const [isPaymentCart, setPaymentCart] = useState(false);

  // Get Order Information
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    const url = `https://keycap-server.vercel.app/order/${orderId}`;
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderInfo(data);
      });
  }, [orderId]);
  if (orderInfo.length === 0) {
    return <Loading />;
  }
  const { status, items, payment, totalAmount, date } = orderInfo;

  const openPaymentCart = () => {
    setPaymentCart(true);
  };

  const closePaymentCart = () => {
    setPaymentCart(false);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 p-4">
        <div>
          <h2 className=" font-semibold uppercase">
            Order Details: #Order-{orderId.slice(0, 4)}
          </h2>
          <p className="text-gray-500 text-sm">Order Created : {date}</p>
        </div>

        <div className="flex items-center justify-start md:justify-end gap-4 py-2">
          <div className="text-sm text-gray-500 flex items-center gap-1">
            Payment Status :
            {payment.status && (
              <>
                <span className="bg-green-400/10 text-[11px] lg:text-sm  text-green-500 px-3 py-1 rounded-md leading-none font-medium text-end">
                  Payment Complete
                </span>
              </>
            )}
            {!payment.status && (
              <>
                <span className="bg-orange-400/10 text-[11px] lg:text-sm  text-yellow-600 px-3 py-1 rounded-md leading-none font-medium text-end">
                  Payment Pending
                </span>
              </>
            )}
          </div>
          {!payment.status && (
            <button
              type="button"
              onClick={openPaymentCart}
              className="text-xs lg:text-base bg-primary-600 hover:bg-primary-700 duration-300 text-white px-3 py-1.5 rounded"
            >
              Pay Now
            </button>
          )}
        </div>
      </div>
      <div className="bg-white">
        <OrderStatus status={status} />
      </div>
      {/* <CustomerInfo orderInfo={orderInfo} /> */}

      <div className="bg-white p-4">
        <h2 className=" font-medium pb-2">Order Summery</h2>
        <div className="text-gray-800 font-medium text-sm max-w-[350px]">
          <p>
            Order Date: <span className="text-gray-500 pl-1">{date}</span>
          </p>
          <p>
            Payment Method:{" "}
            <span className="text-gray-500 pl-1">{payment.method}</span>
          </p>
          {payment.transactionId && (
            <div>
              Transaction Id:
              <span className="text-gray-500 pl-1">
                {" "}
                {payment.transactionId}
              </span>
            </div>
          )}
        </div>
        <div className="relative overflow-x-auto py-4">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100  ">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Unit Price
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <OrderItems key={idx} item={item} />
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold text-gray-900 ">
                <td className="px-6 py-3">{}</td>
                <td className="px-6 py-3">{}</td>
                <th scope="row" className="px-6 py-3 text-base">
                  Total
                </th>
                <td className="px-6 py-3">
                  <FormatePrice price={totalAmount} />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <PaymentModal
        reload={reload}
        setIsReload={setIsReload}
        order={orderInfo}
        isPaymentCart={isPaymentCart}
        onClose={closePaymentCart}
      />
    </div>
  );
};

export default OrderDetails;
