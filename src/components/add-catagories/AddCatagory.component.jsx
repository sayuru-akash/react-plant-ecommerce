import { useState } from "react";

import { addCategory } from "../../utils/firebase/firebasefirestore.utils";

const defaultFormState = {
  categoryName: "",
};

const AddCatagory = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { categoryName } = formState;

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  function handleSubmit(e) {
    const handler = async () => {
      e.preventDefault();

      if (categoryName.length === 0) {
        return;
      }
      try {
        const response = await addCategory({
          categoryName,
        });
        alert("Category Added Successfully - " + response);
        resetForm();
      } catch (error) {
        alert(error.message);
      }
    };
    handler().catch((error) => {
      console.error(error);
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

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
            <form
              className="row justify-content-center container"
              onSubmit={handleSubmit}
            >
              <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="categoryName" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  class="form-control"
                  name="categoryName"
                  value={categoryName}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="productImages" className="form-label">
                  Category Image
                </label>
                <input
                  className="form-control"
                  name="categoryImage"
                  type="file"
                />
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
