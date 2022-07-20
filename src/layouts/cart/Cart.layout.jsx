
const Cart = () => {
  return (
    <div className="m-3 row">
        <div className="col-lg-8 col-sm-12">
        <div className='mb-3 row mt-2'>
                <h3>Cart Items</h3>
        </div>
            <div className="table-responsive">
            <table className="table bordered striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button type="button" className="btn "><i className="fa-solid fa-xmark"></i></button></td>
                        <td><img src="..." className="img-thumbnail" alt="..."/></td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-success">-</button>
                            <button type="button" className="btn btn-success">1</button>
                            <button type="button" className="btn btn-success">+</button>
                        </div>
                        </td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="row justify-content-center">
            <button type="button" className="btn btn-success w-50">Update Cart</button>
        </div>
        </div>
        <div className="col-lg-4 col-sm-12">
            <div className="card m-3">
                <div className="card-body text-start m-2">
                    <div className="row">
                        <h5 className="card-title">Cart Totals</h5>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 className="card-subtitle mb-2 mt-2 text-start">Subtotal</h6>
                        </div>
                        <div className="col-6">
                            <h6 className="card-subtitle mb-2 mt-2 text-end">රු85.00</h6>
                        </div>
                        <hr />
                        <div className="col-6">
                            <h6 className="card-subtitle mb-2 mt-2 text-start">Shipping</h6>
                        </div>
                        <div className="col-6">
                            <h6 className="card-subtitle mb-2 mt-2 text-end">රු400.00</h6>
                        </div>
                        <p className="card-subtitle mb-2 mt-2 text-end">Deliver to my shipping address</p>
                        <hr />
                        <div className="col-6">
                            <h4 className="card-subtitle mb-2 mt-2 text-start">Total</h4>
                        </div>
                        <div className="col-6">
                            <h4 className="card-subtitle mb-2 mt-2 text-end">රු85.00</h4>
                        </div>
                        <button type="button" className="btn btn-success mt-4 mb-2">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart