import { useState } from "react";

import { addCategory } from "../../utils/firebase/firebasefirestore.utils";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../../utils/firebase/firebaseauth.utils";

const defaultFormState = {
  categoryName: "",
};

const AddCatagory = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { categoryName } = formState;

  const [file, setFile] = useState("");

  const [percent, setPercent] = useState(0);

  function handleImgChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    const handlerUp = async () => {
      if (!file) {
        alert("Please upload an image first!");
        return;
      }

      const storageRef = ref(storage, `/categoryimg/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      await uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            addCategory({
              categoryName,
              categoryImage: url.toString(),
            });
          });
        }
      );
    };
    handlerUp();
  };

  const resetForm = (event) => {
    setFormState(defaultFormState);
  };

  function handleSubmit(e) {
    const handler = async () => {
      e.preventDefault();

      if (categoryName.length === 0) {
        return;
      }
      try {
      } catch (error) {
        alert(error.message);
      }
      try {
        const response = await handleUpload();

        alert("Category Added Successfully");
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
      tabIndex="-1"
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
                <label htmlFor="categoryImage" className="form-label">
                  Category Image
                </label>
                <input
                  className="form-control"
                  name="categoryImage"
                  type="file"
                  id="categoryImage"
                  accept="/image/*"
                  onChange={handleImgChange}
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
