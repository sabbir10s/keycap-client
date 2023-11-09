import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div>
      <h3>Congratulations! order has been placed</h3>
      <p>Please confirm your order by payment </p>
      <Link>Complete Order</Link>
    </div>
  );
};

export default OrderSuccess;
