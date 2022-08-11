import { useSearchParams } from "react-router-dom";

import ProductLoop from "../../components/product-loop/ProductLoop.component"

const Shop = () => {

  const [searchParams] = useSearchParams();
  const sKey = (searchParams.get('search'));
  
  return (
    <>
    {sKey != null ? <h2 className="mt-4">Search Results for {sKey}</h2> : <h2 className="mt-4">Shop</h2>}
    
    <div className="row">
      <ProductLoop/>
    </div>
    </>
  )
}

export default Shop
