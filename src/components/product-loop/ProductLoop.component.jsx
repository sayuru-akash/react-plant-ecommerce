import { useState, useEffect } from "react"

import { getNextProductsToLoop, getProductsToLoop } from "../../utils/firebase/firebasefirestore.utils"

import './ProductLoop.styles.css';

const ProductLoop = () => {

  const [products, setProducts] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    getProductsToLoop().then((productData) => {
      setProducts(productData.data);
      setLastItem(productData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextProductsToLoop(lastItem).then((productData) => {
      setProducts([...products, ...productData.data])
      setLastItem(productData.lastVisible);
    });
  }
  return (
    <>
    {products.map((product) => (
    <div className="col-sm-12 col-lg-3 col-md-4" key={product.id}>
      <div className='card m-4'>
        <img className="card-img-top product-img" src={product.data.image} alt={product.data.name} />
        <div className="card-body">
            <h5 className="card-title">{product.data.name}</h5>
            <a href="#" className="btn btn-outline-success">ADD TO CART</a>
        </div>
      </div>
    </div>
    ))}
    <div>
      <button class="btn btn-outline-dark shadow-none mt-4" onClick={loadNext}>Load More...</button>
    </div>
    </>
  )
}

export default ProductLoop