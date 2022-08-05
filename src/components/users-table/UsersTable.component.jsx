import { React, useState, useEffect } from "react";

import { getNextUsers, getUsers, deleteUser } from "../../utils/firebase/firebasefirestore.utils";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    getUsers().then((userData) => {
      setUsers(userData.data);
      setLastItem(userData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextUsers(lastItem).then((userData) => {
      setUsers([...users, ...userData.data])
      setLastItem(userData.lastVisible);
    });
  }

  return (
    <>
      <div className="mb-5 row">
        <div className="col-lg-6 col-sm-12">
          <h3>All Users</h3>
        </div>
        <div className="col-lg-6 col-sm-12">
          <form className="d-flex">
            <input
              className="form-control me-2 search-item"
              type="search"
              placeholder="Search"
              aria-label="Search"
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
        <button class="btn btn-outline-dark shadow-none" onClick={loadNext}>Load More...</button>
      </div>
    </>
  );
};

export default UsersTable;
