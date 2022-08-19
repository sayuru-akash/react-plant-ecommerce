import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { getUserAddresses, deleteUserAddress, editUserAddress } from "../../utils/firebase/firebasefirestore.utils";


const defaultAddressFormState = {
  firstName: "",
  lastName: "",
  country: "",
  address: "",
  city: "",
  postalCode:"",
  phone:"",
  email:""
};

const AddressesView = () => {
  const { currentUser } = useContext(UserContext);
  const userId = currentUser.uid;

  const [addresses, setAddresses] = useState([]);

  const [addressFormState, setAddressFormState] = useState(defaultAddressFormState);
  const { firstName, lastName, country, address, city, postalCode, phone, email} = addressFormState;

  const navigate = useNavigate();

  const handleEditAddress = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        await editUserAddress(addressFormState);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };


  useEffect(() => {
    getUserAddresses(userId).then((addresses) => {
      setAddresses(addresses);
    });
  }, []);

  const handleChangeProduct = (event) => {
    const { name, value } = event.target;
    setAddressFormState({ ...addressFormState, [name]: value });
  }

  const resetForm = () => {
    setAddressFormState(defaultAddressFormState);
  };

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
                  <td>{address.data.city}</td>
                  <td>{address.data.postalCode}</td>
                  <td>{address.data.country}</td>
                  <td>{address.data.phone}</td>
                  <td>{address.data.email}</td>
                  <td>
                    <button className="btn btn-warning m-1"
                    data-bs-toggle="modal"
                    data-bs-target="#editAddressModal"
                    onClick={() => {
                      setAddressFormState({
                        id: address.id,
                        firstName: address.data.firstName,
                        lastName: address.data.lastName,
                        address: address.data.address,
                        city: address.data.city,
                        postalCode: address.data.postalCode,
                        country: address.data.country,
                        phone: address.data.phone,
                        email: address.data.email,
                      });
                    }}
                    >
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
      <div
      className="modal fade"
      id="editAddressModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Address
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body"></div>
    <form className='mb-5 p-5 pt-0' onSubmit={handleEditAddress}>
        <div className="mb-3">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input type="text" className="form-control"
            value={addressFormState.firstName}
            name="firstName"
            id="firstName"
            onChange={handleChangeProduct}/>
        </div>
        <div className="mb-3">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input type="text" className="form-control"
            value={addressFormState.lastName}
            name="lastName"
            id="lastName"
            onChange={handleChangeProduct}/>
        </div>
        <div className="mb-3">
            <label htmlFor="select_country" className="form-label">Select Country</label>
            <select className="form-select" aria-label="Default select example"
            id="country"
            name="country"
            value={addressFormState.country}
            onChange={handleChangeProduct}>
                <option value="" defaultValue>Select Country</option>
                <option value="LK">Sri Lanka</option>
                <option value="UK">UK</option>
                <option value="US">USA</option>
            </select>
        </div>
        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea rows="3"className="form-control"
            id="address"
            name="address"
            value={addressFormState.address}
            onChange={handleChangeProduct}>
            </textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="city" className="form-label">Town / City</label>
            <input type="text" className="form-control"
            id="city"
            name="city"
            value={addressFormState.city}
            onChange={handleChangeProduct}/>
        </div>
        <div className="mb-3">
            <label htmlFor="postal_code" className="form-label">Postcode / ZIP</label>
            <input type="text" className="form-control"
            name="postalCode"
            id="postalCode"
            value={addressFormState.postalCode}
            onChange={handleChangeProduct}/>
        </div>
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="mobile" className="form-control"
            id="phone"
            name="phone"
            value={addressFormState.phone}
            onChange={handleChangeProduct}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control"
            id="email"
            name="email"
            value={addressFormState.email}
            onChange={handleChangeProduct}/>
        </div>
        <button type="submit" className="btn btn-warning mt-4 w-100">Update Address</button>
    </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default AddressesView;
