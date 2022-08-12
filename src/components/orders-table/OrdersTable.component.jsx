const OrdersTable = () => {
  return (
    <>
      <div className="mb-5 row">
        <div className="col-lg-6 col-sm-12">
          <h3>Order Details</h3>
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
              <th>User</th>
              <th>Delivery Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>
                <button type="button" className="btn btn-primary me-3">
                  <i className="fa-solid fa-eye me-2"></i>View
                </button>
                <button type="button" className="btn btn-danger">
                  <i className="fa-solid fa-trash-can me-2"></i>Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersTable;
