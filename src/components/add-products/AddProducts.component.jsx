
const AddProducts = () => {
  return (
        <div className="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header text-center">
                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form className="row justify-content-center container">
                    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="productName" className="form-label">Product Name</label>
                        <input type="text" class="form-control" name="productName"/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="catagory" className="form-label">Catagory</label>
                        <input type="text" class="form-control" name="catagory"/>
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" name="description" rows="5"></textarea>
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="productImages" className="form-label">Product Images</label>
                        <input className="form-control" name="productImage" type ="file" multiple/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" className="form-control" name="price"/>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-success mt-4 mb-4 w-75">Add Product</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
  )
}

export default AddProducts