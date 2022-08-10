import { useEffect, useState } from "react";

import AddProducts from "../add-products/AddProducts.component";

import { getNextProducts, getProducts, deleteProduct } from "../../utils/firebase/firebasefirestore.utils";
import EditProduct from "../edit-products/EditProduct.component";

const ProductsTable = () => {
  const defaultFormState = {
    searchKey: "",
  };

  const [formState, setFormState] = useState(defaultFormState);
  const {searchKey} = formState;

  const [products, setProducts] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        getProducts(searchKey).then((productData) => {
          setProducts(productData.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    getProducts(searchKey).then((productData) => {
      setProducts(productData.data);
      setLastItem(productData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
      getNextProducts(lastItem).then((productData) => {
      setProducts([...products, ...productData.data])
      setLastItem(productData.lastVisible);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <div className="mb-4 row">
        <div className="col-lg-6 col-sm-12">
          <h3>All Products</h3>
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
                  <button type="button"
                    className="btn btn-warning me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#editProductModal">
                    <i className="fa-solid fa-pen-to-square me-2"></i>Edit
                  </button>
                  <button onClick={()=> deleteProduct(product.id)} className="btn btn-danger">
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button class="btn btn-outline-dark shadow-none" onClick={loadNext}>Load More...</button>
      </div>

      {/* add products modal */}
      <AddProducts />
      <EditProduct/>
    </>
  );
};

export default ProductsTable;
