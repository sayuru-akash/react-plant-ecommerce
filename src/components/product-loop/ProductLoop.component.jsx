import { useState, useEffect } from "react"

import { getProductsToLoop } from "../../utils/firebase/firebasefirestore.utils"

import './ProductLoop.styles.css';

const ProductLoop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsToLoop().then((products) => setProducts(products));
  }, []);

  return (
    <>
    {products.map((product) => (
    <div className="col-sm-12 col-lg-3 col-md-4" key={product.count}>
      <div className='card m-4'>
        <img className="card-img-top product-img" src={product.data.image} alt={product.data.name} />
        <div className="card-body">
            <h5 className="card-title">{product.data.name}</h5>
            <a href="#" className="btn btn-outline-success">ADD TO CART</a>
        </div>
      </div>
    </div>
    ))}
    </>
  )
}

export default ProductLoop