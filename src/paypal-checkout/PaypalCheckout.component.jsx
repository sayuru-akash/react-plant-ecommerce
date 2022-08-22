import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function PaypalCheckout() {
 const [success, setSuccess] = useState(false);
 const [ErrorMessage, setErrorMessage] = useState("");
 const [orderID, setOrderID] = useState(false);
 
 const createOrder = (data, actions) => {
   return actions.order
     .create({
       purchase_units: [
         {
           description: "Sunflower",
           amount: {
             currency_code: "USD",
             value: 2,
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
   });
 };

 const onError = (data, actions) => {
   setErrorMessage("An Error occured with your payment ");
 };
 return (
   <PayPalScriptProvider
     options={{
       "client-id":"AY9WWCScGbKNIeGiVFkmAypyoaTCfZWYh5mNdZYwkYr9T5gWnnCeekqEihvXgY37i0rMibvXiU9BK4f8",
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
}

export default PaypalCheckout;