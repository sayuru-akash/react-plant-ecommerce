import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import { deleteOrder, getNextOrders, getOrders } from "../../utils/firebase/firebasefirestore.utils";
import ViewOrder from "../view-order/ViewOrder.component";

const OrdersTable = () => {
  const defaultFormState = {
    searchKey: "",
  };
  const { currentUser } = useContext(UserContext);
  const currentUserID = currentUser.uid;

  const [formState, setFormState] = useState(defaultFormState);
  const {searchKey} = formState;

  const [orders, setOrders] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        getOrders(currentUserID,searchKey).then((orderData) => {
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
    getOrders(currentUserID,searchKey).then((orderData) => {
      console.log(orderData);
      setOrders(orderData.data);
      setLastItem(orderData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextOrders(currentUserID,lastItem).then((orderData) => {
      setOrders([...orders, ...orderData.data])
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
              <th>User</th>
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
                <td>{order.customer.firstName}</td>
                <td>{order.data.deliveryDate}</td>
                <td>{order.data.total}</td>
                <td>{order.data.status}</td>
                <td>
                  <button type="button" className="btn btn-primary me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#viewOrderModal">
                    <i className="fa-solid fa-eye me-2"></i>View
                  </button>
                  <button onClick={()=>deleteOrder(order.id)} className="btn btn-danger">
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-outline-dark shadow-none" onClick={loadNext}>Load More...</button>
      </div>
      <ViewOrder/>
    </div>
  );
};

export default OrdersTable;
