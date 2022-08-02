import { useEffect, useState } from "react";

import AddProducts from "../add-products/AddProducts.component";

import { getProducts } from "../../utils/firebase/firebasefirestore.utils";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <div className="mb-4 row">
        <div className="col-lg-6 col-sm-12">
          <h3>All Products</h3>
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
      <div className="mb-4">
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
        >
          <i className="fa-solid fa-plus me-2"></i>Add Product
        </button>
      </div>
      <div className="table-responsive">
        <table className="table bordered striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Catagory</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.count}>
                <th scope="row">{index}</th>
                <td>{product.data.name}</td>
                <td>{product.data.category}</td>
                <td>{product.data.price}</td>
                <td>{product.data.quantity}</td>
                <td>
                  <button type="button" className="btn btn-warning me-3">
                    <i className="fa-solid fa-pen-to-square me-2"></i>Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* add products modal */}
      <AddProducts />
    </>
  );
};

export default ProductsTable;
