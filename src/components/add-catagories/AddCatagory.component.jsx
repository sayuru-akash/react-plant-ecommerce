import React from "react";

const AddCatagory = () => {
  return (
    <div
      className="modal fade"
      id="addCatagorieModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row justify-content-center container">
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="categoryName" className="form-label">
                  Category Name
                </label>
                <input type="text" class="form-control" name="categoryName" />
              </div>
              <div className="row justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success mt-4 mb-4 w-75"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCatagory;
