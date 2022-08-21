import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import {
  getNextProductsToLoop,
  getProductsToLoop,
  addProductToCart,
  getSearchProductsToLoop,
  getCategoryProductsToLoop,
} from "../../utils/firebase/firebasefirestore.utils";

import "./ProductLoop.styles.css";

const ProductLoop = () => {
  const [searchParams] = useSearchParams();
  const sKey = searchParams.get("search");

  const [catParams] = useSearchParams();
  const cKey = catParams.get("category");

  const [products, setProducts] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    if (sKey === null && cKey === null) {
      getProductsToLoop().then((productData) => {
        setProducts(productData.data);
        setLastItem(productData.lastVisible);
      });
    } 
    else if (sKey !== null && cKey === null) {
      getSearchProductsToLoop(sKey).then((productData) => {
        setProducts(productData.data);
        setLastItem(productData.lastVisible);
      });
    }
    else if (sKey === null && cKey !== null) {
      getCategoryProductsToLoop(cKey).then((productData) => {
        setProducts(productData.data);
        setLastItem(productData.lastVisible);
      });
    }
  }, [sKey]);

  const loadNext = () => {
    getNextProductsToLoop(lastItem).then((productData) => {
      setProducts([...products, ...productData.data]);
      setLastItem(productData.lastVisible);
    });
  };
  return (
    <>
      {products.map((product) => (
        <div className="col-sm-12 col-lg-3 col-md-4" key={product.id}>
          <div className="card m-4">
            <a href={`/product?item=${product.id}`}>
              <img
                className="card-img-top product-img"
                src={product.data.image}
                alt={product.data.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.data.name}</h5>
                <p className="card-text">Rs. {product.data.price}/=</p>
              </div>
            </a>
            <div className="card-footer">
              <a
                className="btn btn-outline-success"
                onClick={() => addProductToCart(product)}
              >
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button
          className="btn btn-outline-dark shadow-none mt-4"
          onClick={loadNext}
        >
          Load More...
        </button>
      </div>
    </>
  );
};

export default ProductLoop;
