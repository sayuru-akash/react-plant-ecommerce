import React from 'react';
import './ProductSingle.styles.css';

const ProductSingle = () => {
  return (
    <div className='mt-5 mb-5 p-lg-5 row'>
      <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="container">
            <img src="https://images.unsplash.com/photo-1597305877032-0668b3c6413a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" className="product-image img-thumbnail mt-4" alt="..."/>
            <h2 className='mt-5'>Description</h2>
            <p className='mt-5 text-start'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap 
            into electronic typesetting, remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
            </p>
            </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 text-start">
        <div className='container mt-4'>
            <h1>Product Name</h1>
            <p>Catagory</p>
            <h4>$465.00</h4>
            <div className="input-group mt-5 quantity-changer">
                <div className="input-group-text" id="btnGroupAddon">
                    <button type="button" className="btn"><span className='button-font'>-</span></button>
                </div>
                <input type="text" class="form-control" placeholder='1'/>
                <div class="input-group-text" id="btnGroupAddon">
                    <button type="button" className="btn"><span className='button-font'>+</span></button>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-sm-10 col-lg-6'>
                    <button type="button" className="btn btn-lg btn-outline-success w-100 mt-3"><i class="fa-solid fa-cart-shopping me-3"></i>Add To Cart</button>
                </div>
                <div className='col-sm-10 col-lg-6'>
                    <button type="button" className="btn btn-lg btn-success w-100 mt-3"><i class="fa-solid fa-credit-card me-3"></i>Buy Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSingle
