import React from 'react'

const ViewOrder = () => {
  return (
    <div
      className="modal fade"
      id="viewOrderModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="exampleModalLabel">
              View Order
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
                <div className="modal-body">
                <div className="col-12">
                <h2 className="card-subtitle mb-2 mt-2 text-center">Ordered Items</h2>
              </div>
              <hr />
              {/* {cartItems.length > 0 ? (
                cartItems.map((cartItem) => (
                  <div className='row m-0 p-0' key={cartItem.id}>
                    <div className="col-6">
                            <p className='card-subtitle mb-2 mt-2 text-start'>
                        {cartItem.data.data.name} x {cartItem.data.qty}
                        </p>
                    </div>
                    <div className="col-6">
                        <p className='card-subtitle mb-2 mt-2 text-end'>
                            Rs. {cartItem.data.data.price * cartItem.data.qty}/=
                        </p>
                    </div>
                  </div>
                ))
              ) : (
                  <h6 className="text-center">
                    Your cart is empty
                  </h6>
              )} */}
                  <div className='row m-0 p-0' >
                    <div className="col-6">
                            <p className='card-subtitle mb-2 mt-2 text-start'>
                        test Product x 5
                        </p>
                    </div>
                    <div className="col-6">
                        <p className='card-subtitle mb-2 mt-2 text-end'>
                            Rs. 5000/=
                        </p>
                    </div>
              <div className="col-6">
                <h5 className="card-subtitle mb-2 mt-2 text-start">Shipping</h5>
              </div>
              <div className="col-6">
                <h6 className="card-subtitle mb-2 mt-2 text-end">
                  Rs. 400/=
                </h6>
              </div>
              <hr />
              <div className="col-6">
                <h5 className="card-subtitle mb-2 mt-2 text-start">Ammount</h5>
              </div>
              <div className="col-6">
                <h6 className="card-subtitle mb-2 mt-2 text-end">
                  Rs. 15000/=
                </h6>
              </div>
              <hr />
              <div className="col-6">
                <h5 className="card-subtitle mb-2 mt-2 text-start">Address</h5>
              </div>
              <div className="col-6">
                <h6 className="card-subtitle mb-2 mt-2 text-end">
                  573, Pitipana North, Homagama
                </h6>
              </div>
              <hr />
              <div className="col-6">
                <h5 className="card-subtitle mb-2 mt-2 text-start">Delivery Date</h5>
              </div>
              <div className="col-6">
                <h6 className="card-subtitle mb-2 mt-2 text-end">
                  2022/06/29
                </h6>
              </div>
              <hr />
              <div className="col-6">
                <h5 className="card-subtitle mb-2 mt-2 text-start">Payment Method</h5>
              </div>
              <div className="col-6">
                <h6 className="card-subtitle mb-2 mt-2 text-end">
                  Cash On Delivery
                </h6>
              </div>
                </div>
                </div>
            </div>
            </div>
            </div>
  )
}

export default ViewOrder