import { useEffect, useState } from "react";

import AddProducts from "../add-products/AddProducts.component";

import {
  getNextProducts,
  getProducts,
  deleteProduct,
  editProduct,
} from "../../utils/firebase/firebasefirestore.utils";

const defaultProductFormState = {
  name: "",
  category: "",
  description: "",
  price: "",
  quantity: "",
};

const defaultFormState = {
  searchKey: "",
};

const ProductsTable = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { searchKey } = formState;

  const [productFormState, setProductFormState] = useState(
    defaultProductFormState
  );
  const { name, category, description, price, quantity } = productFormState;

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

  const handleEditProduct = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        await editProduct(productFormState);
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

  const loadNext = () => {
    getNextProducts(lastItem).then((productData) => {
      setProducts([...products, ...productData.data]);
      setLastItem(productData.lastVisible);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleChangeProduct = (event) => {
    const { name, value } = event.target;
    setProductFormState({ ...productFormState, [name]: value });
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
                  <button
                    type="button"
                    className="btn btn-warning me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#editProductModal"
                    onClick={() => {
                      setProductFormState({
                        ...formState,
                        id: product.id,
                        name: product.data.name,
                        category: product.data.category,
                        description: product.data.description,
                        price: product.data.price,
                        quantity: product.data.quantity,
                      });
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square me-2"></i>Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
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

      {/* add products modal */}
      <AddProducts />
      {/* <EditProduct/> */}
      <div
        className="modal fade"
        id="editProductModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={handleEditProduct}
                className="row justify-content-center container"
              >
                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    value={productFormState.name}
                    onChange={handleChangeProduct}
                  />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    className="form-control"
                    value={productFormState.category}
                    onChange={handleChangeProduct}
                  />
                </div>
                <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="5"
                    value={productFormState.description}
                    onChange={handleChangeProduct}
                  ></textarea>
                </div>
                {/* <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                  <label htmlFor="productImages" className="form-label">
                    Product Images
                  </label>
                  <input
                    className="form-control"
                    name="productImage"
                    type="file"
                    accept="/image/*"
                    id="productImages"
                  />
                </div> */}
                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    className="form-control"
                    value={productFormState.price}
                    onChange={handleChangeProduct}
                  />
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    className="form-control"
                    value={productFormState.quantity}
                    onChange={handleChangeProduct}
                  />
                </div>
                <div className="row justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-warning mt-4 mb-4 w-75"
                  >
                    Edit Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsTable;
