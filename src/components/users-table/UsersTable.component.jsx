import { React, useState, useEffect } from "react";

import { getUsers } from "../../utils/firebase/firebasefirestore.utils";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

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
                  <button type="button" className="btn btn-danger">
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item"><a class="page-link" href="#">1</a></li>
            <li className="page-item"><a class="page-link" href="#">2</a></li>
            <li className="page-item"><a class="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default UsersTable;
