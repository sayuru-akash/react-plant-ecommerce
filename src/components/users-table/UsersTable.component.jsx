import { React, useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/user.context";

import { getNextUsers, getUsers, deleteUser } from "../../utils/firebase/firebasefirestore.utils";

const UsersTable = () => {
  const defaultFormState = {
    searchKey: "",
  };

  const { currentUser } = useContext(UserContext);

  const [formState, setFormState] = useState(defaultFormState);
  const {searchKey} = formState;

  const [users, setUsers] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        getUsers(searchKey).then((userData) => {
          setUsers(userData.data);
          setLastItem(userData.lastVisible);
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
    getUsers(searchKey).then((userData) => {
      setUsers(userData.data);
      setLastItem(userData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextUsers(lastItem).then((userData) => {
      setUsers([...users, ...userData.data])
      setLastItem(userData.lastVisible);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <div className="mb-5 row">
        <div className="col-lg-6 col-sm-12">
          <h3>All Users</h3>
        </div>
        <div className="col-lg-6 col-sm-12">
          <form className="d-flex" onSubmit={handleSubmit}>
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
              <th>Email</th>
                <th>User Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.count}>
                <th scope="row">{index}</th>
                <td>{user.data.email}</td>
                <td>{user.data.displayName}</td>
                <td>
                  <button onClick={()=>deleteUser(user.id)} className="btn btn-danger">
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-outline-dark shadow-none" onClick={loadNext}>Load More...</button>
      </div>
    </>
  );
};

export default UsersTable;
