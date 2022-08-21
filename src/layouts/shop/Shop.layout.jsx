import { useSearchParams } from "react-router-dom";

import ProductLoop from "../../components/product-loop/ProductLoop.component"

const Shop = () => {

  const [searchParams] = useSearchParams();
  const sKey = (searchParams.get('search'));
  const category = (searchParams.get('category'));
  
  return (
    <>
    {sKey != null ? <h2 className="mt-4">Search Results for {sKey}</h2> : <h2 className="mt-4">Shop</h2>}
    {category != null ? <h4 className="mt-4">Category: {category}</h4> : <></>}
    
    <div className="row">
      <ProductLoop/>
    </div>
    </>
  )
}

export default Shop
