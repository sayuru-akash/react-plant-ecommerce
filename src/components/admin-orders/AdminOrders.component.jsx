import { useEffect, useState, useContext } from "react";
import {
  deleteOrder,
  getAddress,
  getAdminOrders,
  getNextAdminOrders,
  getUser,
} from "../../utils/firebase/firebasefirestore.utils";

const defaultOrderFormState = {
  ammount: "",
  deliveryDate: "",
  paymentMethod: "",
  address: "",
  cartItems: [],
};

const AdminOrders = () => {
  const defaultFormState = {
    searchKey: "",
  };

  const [formState, setFormState] = useState(defaultFormState);
  const { searchKey } = formState;

  const [orders, setOrders] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  const [orderFormState, setOrderFormState] = useState(defaultOrderFormState);
  const { ammount, deliveryDate, paymentMethod, address } = orderFormState;

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        getAdminOrders(searchKey).then((orderData) => {
          setOrders(orderData.data);
          setLastItem(orderData.lastVisible);
        });
      } catch (error) {
        console.error("filtering error", error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    getAdminOrders(searchKey).then((orderData) => {
      console.log(orderData);
      setOrders(orderData.data);
      setLastItem(orderData.lastVisible);
    });
  }, []);

  const loadNext = () => {
    getNextAdminOrders(lastItem).then((orderData) => {
      setOrders([...orders, ...orderData.data]);
      setLastItem(orderData.lastVisible);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="m-4">
      <div className="mb-5 row">
        <div className="col-lg-6 col-sm-12">
          <h3>Order Details</h3>
        </div>
        <div className="col-lg-6 col-sm-12">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              className="form-control me-2 search-item"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              name="searchKey"
              value={searchKey}
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table bordered striped">
          <thead>
            <tr>
              <th>#</th>
              <th>User ID</th>
              <th>Delivery Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <th scope="row">{index}</th>
                <td>{order.data.userName}</td>
                <td>{order.data.deliveryDate}</td>
                <td>{order.data.total}</td>
                <td>{order.data.status}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#viewOrderModal"
                    onClick={() => {
                      getAddress(order.data.address).then((addressData) => {
                        setOrderFormState({
                          ...formState,
                          ammount: order.data.total,
                          deliveryDate: order.data.deliveryDate,
                          paymentMethod: order.data.paymentMethod,
                          address:
                            addressData.firstName +
                            " " +
                            addressData.lastName +
                            ", " +
                            addressData.address +
                            ", " +
                            addressData.city +
                            ", " +
                            addressData.postalCode +
                            ", " +
                            addressData.country,
                          cartItems: order.data.cartItems,
                        });
                      });
                    }}
                  >
                    <i className="fa-solid fa-eye me-2"></i>View
                  </button>
                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="btn btn-danger"
                  >
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-outline-dark shadow-none" onClick={loadNext}>
          Load More...
        </button>
      </div>
      <div
        className="modal fade"
        id="viewOrderModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                View Order
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col-12">
                <h2 className="card-subtitle mb-2 mt-2 text-center">
                  Order Details
                </h2>
              </div>
              <hr />
              {orderFormState.cartItems.map((product) => (
                <div className="row m-0 p-0" key={product.id}>
                  <div className="col-6">
                    <p className="card-subtitle mb-2 mt-2 text-start">
                      {product.data.data.name} x {product.data.qty}
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="card-subtitle mb-2 mt-2 text-end">
                      Rs. {product.data.data.price}
                      /=
                    </p>
                  </div>
                </div>
              ))}
              <hr />
              <div className="row m-0 p-0">
                <div className="col-6">
                  <h5 className="card-subtitle mb-2 mt-2 text-start">
                    Shipping
                  </h5>
                </div>
                <div className="col-6">
                  <h6 className="card-subtitle mb-2 mt-2 text-end">
                    Rs. 400/=
                  </h6>
                </div>
                <hr />
                <div className="col-6">
                  <h5 className="card-subtitle mb-2 mt-2 text-start">Total</h5>
                </div>
                <div className="col-6">
                  <h6 className="card-subtitle mb-2 mt-2 text-end">
                    Rs. {orderFormState.ammount}/=
                  </h6>
                </div>
                <hr />
                <div className="col-6">
                  <h5 className="card-subtitle mb-2 mt-2 text-start">
                    Address
                  </h5>
                </div>
                <div className="col-6">
                  <h6 className="card-subtitle mb-2 mt-2 text-end">
                    {orderFormState.address}
                  </h6>
                </div>
                <div className="col-6">
                  <h5 className="card-subtitle mb-2 mt-2 text-start">
                    Delivery Date
                  </h5>
                </div>
                <div className="col-6">
                  <h6 className="card-subtitle mb-2 mt-2 text-end">
                    {orderFormState.deliveryDate}
                  </h6>
                </div>
                <div className="col-6">
                  <h5 className="card-subtitle mb-2 mt-2 text-start">
                    Payment Method
                  </h5>
                </div>
                <div className="col-6">
                  <h6 className="card-subtitle mb-2 mt-2 text-end">
                    {orderFormState.paymentMethod}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
