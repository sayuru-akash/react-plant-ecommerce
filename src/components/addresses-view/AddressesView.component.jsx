import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { getUserAddresses, deleteUserAddress } from "../../utils/firebase/firebasefirestore.utils";

const AddressesView = () => {
  const { currentUser } = useContext(UserContext);
  const userId = currentUser.uid;

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getUserAddresses(userId).then((addresses) => {
      setAddresses(addresses);
    });
  }, [addresses]);

  return (
    <>
      <Outlet />
      <div className="row m-4">
        <div className="mb-5 mt-3 row">
          <h3>Saved Addresses</h3>
        </div>
        <div className="table-responsive">
          <table className="table bordered striped">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Town / City</th>
                <th>PostCode / ZIP</th>
                <th>Country</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {addresses.length > 0 ? (
              
              addresses.map((address, index) => (
                <tr key={address.id}>
                  <th scope="row">{index}</th>
                  <td>{address.data.firstName}</td>
                  <td>{address.data.lastName}</td>
                  <td>{address.data.address}</td>
                  <td>{address.data.town}</td>
                  <td>{address.data.postalCode}</td>
                  <td>{address.data.country}</td>
                  <td>{address.data.phone}</td>
                  <td>{address.data.email}</td>
                  <td>
                    <button className="btn btn-warning m-1">
                      <i className="fa-solid fa-edit me-2"></i>Edit
                    </button>
                    <button className="btn btn-danger m-1" onClick={()=>{
                      deleteUserAddress(address.id)
                    }}>
                      <i className="fa-solid fa-trash-can me-2"></i>Delete
                    </button>
                  </td>
                </tr>
              ))): (
                <tr>
                  <td colSpan="10">You have not set up this type of addresses yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="row mt-4">
          <a className="btn btn-success" href="/dashboard/address-modify">
            Add Address
          </a>
        </div>
      </div>
    </>
  );
};

export default AddressesView;
