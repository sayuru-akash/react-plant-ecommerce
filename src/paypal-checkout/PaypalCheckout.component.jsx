import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalCheckout = () => {
    return (
        <PayPalScriptProvider options={{ "client-id" : "AY9WWCScGbKNIeGiVFkmAypyoaTCfZWYh5mNdZYwkYr9T5gWnnCeekqEihvXgY37i0rMibvXiU9BK4f8" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    console.log(data);
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        // const name = details.payer.name.given_name;
                        // alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}

export default PaypalCheckout