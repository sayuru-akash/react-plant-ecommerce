import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import {
  getProductData,
  addProductToCart,
} from "../../utils/firebase/firebasefirestore.utils";

import "./ProductSingle.styles.css";

const ProductSingle = () => {
  const [productData, setProductData] = useState([]);

  const [searchParams] = useSearchParams();
  const sKey = searchParams.get("item");

  useEffect(() => {
    getProductData(sKey).then((productData) => {
      setProductData(productData);
    });
  }, []);

  return (
    <div className="mt-5 mb-5 p-lg-5 row">
      <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="container">
          <img
            src={productData.image}
            alt={productData.name}
            className="product-single-image img-thumbnail mt-4"
          />
          <p className="mt-5 text-center">{productData.description}</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 text-start">
        <div className="container mt-4">
          <h1>{productData.name}</h1>
          <p>{productData.category}</p>
          <h4>
            Rs.
            {productData.price}/=
          </h4>
          {/* <div className="input-group mt-5 quantity-changer">
            <div className="input-group-text" id="btnGroupAddon">
              <button type="button" className="btn">
                <span className="button-font">-</span>
              </button>
            </div>
            <input
              type="text"
              className="form-control text-center"
              placeholder="1"
            />
            <div className="input-group-text" id="btnGroupAddon">
              <button type="button" className="btn">
                <span className="button-font">+</span>
              </button>
            </div>
          </div> */}
          <div className="row mt-5">
            <div className="col-sm-10 col-lg-6">
              <button
                type="button"
                className="btn btn-lg btn-outline-success w-100 mt-3"
                onClick={() => addProductToCart({data:productData, id:sKey})}
              >
                <i className="fa-solid fa-cart-shopping me-3"></i>Add To Cart
              </button>
            </div>
            <div className="col-sm-10 col-lg-6">
              <a
                href="/cart"
                type="button"
                className="btn btn-lg btn-success w-100 mt-3"
              >
                <i className="fa-solid fa-credit-card me-3"></i>Go To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
