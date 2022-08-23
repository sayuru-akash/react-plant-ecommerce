import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useContext } from "react";
import { placePPOrder } from "../utils/firebase/firebasefirestore.utils";
import { UserContext } from "../context/user.context";

const PaypalCheckout = ({ deliveryDate, address, total, cartItems }) => {
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const { currentUser } = useContext(UserContext);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: total,
            },
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      placePPOrder( cartItems, deliveryDate, address, total);
    });
  };

  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AY9WWCScGbKNIeGiVFkmAypyoaTCfZWYh5mNdZYwkYr9T5gWnnCeekqEihvXgY37i0rMibvXiU9BK4f8",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalCheckout;
