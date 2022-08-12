import React, { useEffect, useState } from 'react'
import { auth } from '../../utils/firebase/firebaseauth.utils';
import { addCheckout, getCartData, getUserAddresses } from '../../utils/firebase/firebasefirestore.utils';

const calculateTotal = (cartItems) => {
    const total = cartItems.reduce(
      (count, cartItem) => count + cartItem.data.data.price * cartItem.data.qty,
      0
    );
    return total;
  };

const defaultFormState = {
    deliveryDate: "",
    deliveryAddress: "",
    ammount: "",
    cartItems:{
        productName:"",
        quantity:"",
    }
  };

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setUserAddresses] = useState([]);

  const [formState, setFormState] = useState(defaultFormState);
  const { deliveryDate, deliveryAddress, ammount} = formState;

//   const navigate = useNavigate();

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  const handleSubmit = (event) => {
    const handler = async () => {
        const today =new Date()
        const date = today.getDate()+3;
      event.preventDefault();
      if (
        deliveryAddress === "" ||
        deliveryDate === ""||
        ammount === ""
      ) {
        alert("no empty values allowed");
        return;
      }
      if (
        deliveryDate < date
      ) {
        alert("Date should be +3 days after placing the order");
        return;
      }
      try {
        await addCheckout(formState);
        resetForm();
        alert("Order placed successfully");
      } catch (error) {
        console.error("error during placing order", error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getCartData(user.uid).then((cartData) => {
          setCartItems(cartData);
        });

        getUserAddresses(user.uid).then((addressData) => {
            setUserAddresses(addressData);
        });
      }
    });
  }, []);
  return (
    <div className="m-3 row justify-content-center">
        <div className='col-lg-6 col-md-8 col-sm-12'>
        <div className="card m-3">
          <div className="card-body text-start m-2">
            <div className="row">
              <h1 className="card-title text-center">Your Order</h1>
            </div>
            <div className="row">
            <div className="col-6">
                <h4 className="card-subtitle mb-2 mt-2 text-start">Product Items</h4>
              </div>
              <hr />
              {cartItems.length > 0 ? (
                cartItems.map((cartItem) => (
                  <div className='row m-0 p-0' key={cartItem.id}>
                    <div className="col-6">
                            <p className='card-subtitle mb-2 mt-2 text-start'>
                        {cartItem.data.data.name} x {cartItem.data.qty}
                        </p>
                    </div>
                    <div className="col-6">
                        <p className='card-subtitle mb-2 mt-2 text-end'>
                            Rs. {cartItem.data.data.price * cartItem.data.qty}/=
                        </p>
                    </div>
                  </div>
                ))
              ) : (
                  <h6 className="text-center">
                    Your cart is empty
                  </h6>
              )}
              <hr />
              <div className="col-6">
                <h5 className="card-subtitle mb-2 mt-2 text-start">Subtotal</h5>
              </div>
              <div className="col-6">
                <h6 className="card-subtitle mb-2 mt-2 text-end">
                  Rs. {calculateTotal(cartItems)}/=
                </h6>
              </div>
              <hr />
              <div className="col-6">
                <h5 className="card-subtitle mb-2 mt-2 text-start">Shipping</h5>
              </div>
              <div className="col-6">
                <h6 className="card-subtitle mb-2 mt-2 text-end">
                  {cartItems.length > 0 ? "Rs. 400/= " : "Rs. 0/= "}
                </h6>
              </div>
              <hr />
              <p className="card-subtitle mb-4 mt-2 text-start">
                Will be delivered to your shipping address within 2-3 days
              </p>
              <hr />
              <div className="col-6">
                <h4 className="card-subtitle mb-2 mt-2 text-start">Total</h4>
              </div>
              <div className="col-6">
                <h4 className="card-subtitle mb-2 mt-2 text-end">
                  {cartItems.length > 0
                    ? "Rs." + (calculateTotal(cartItems) + 400) + "/="
                    : "Rs. 0/= "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-6 col-md-8 col-sm-12'>
      <form onSubmit={handleSubmit}>
      <input type="text" class="form-control" hidden
                        name='ammount'
                        onChange={handleChange}
                        value={ammount}/>
      <div className="card m-3">
          <div className="card-body text-start m-2">
          <div className="row">
              <h1 className="card-title text-center">Order Details</h1>
            </div>
              <div className='col-12 mt-5'>
              <label htmlFor="deliveryAddress" className="form-label">Address Details</label>
                <select class="form-select" aria-label="Default select example" 
                name='deliveryAddress'
                onChange={handleChange}
                value={deliveryAddress}>
                <option selected value="" disabled>Select Address</option>
                {addresses.length > 0 ? (
                addresses.map((address) => (
                    <option key={address.id} value={address.id}>{address.data.address},{address.data.town},{address.data.postalCode},{address.data.country}</option>
                ))
              ) : (
                <option value="" disabled>No Added Address</option>
              )}
                </select>
              </div>
              <div className="col-12 mt-5">
                <div class="mb-3">
                        <label htmlFor="deleiveryDate" className="form-label">Delivery Date</label>
                        <input type="Date" class="form-control" id="date" 
                        name='deliveryDate'
                        onChange={handleChange}
                        value={deliveryDate}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-5 mb-2 w-100">
                <i class="fa-brands fa-paypal me-3"></i>
                Paypal
              </button>
              <button type="button" className="btn btn-success mt-4 mb-2 w-100">
                Cash On Delivery
              </button>
      </div>
      </div>
      </form>
      </div>
      </div>
  )
}

export default Checkout