import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L17CjFVPM1NcC4wk5HSCO097ADOKg2eQAOM7vvJiloMXfu1ghTtdemx4zqJIsaokSLRN1ymzqin5gtKFyMn0e6z00PtAPsGer"
);

const Payment = ({ order, setIsReload, reload }) => {
  return (
    <div className="p-6">
      <Elements stripe={stripePromise}>
        <CheckoutForm order={order} reload={reload} setIsReload={setIsReload} />
      </Elements>
    </div>
  );
};

export default Payment;
