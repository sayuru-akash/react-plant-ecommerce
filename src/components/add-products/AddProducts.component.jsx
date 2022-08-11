import { useState, useEffect } from "react";

import { addProduct, getCategoryList } from "../../utils/firebase/firebasefirestore.utils";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../../utils/firebase/firebaseauth.utils";

const defaultFormState = {
  productName: "",
  category: "",
  description: "",
  price: "",
  quantity: "",
};

const AddProducts = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { productName, category, description, price, quantity } = formState;
  const [categoryList, setCategoryList] = useState([]);

  const [file, setFile] = useState("");

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    getCategoryList().then((categoryList) => {
      setCategoryList(categoryList);
    })
  }, []);

  function handleImgChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    const handlerUp = async () => {
      if (!file) {
        alert("Please upload an image first!");
        return;
      }

      const storageRef = ref(storage, `/productimg/${file.name}`);

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
            addProduct({
              productName,
              category,
              description,
              price,
              quantity,
              productImage: url.toString(),
            });
          });
        }
      );
    };
    handlerUp();
  };

  const resetForm = () => {
    setFormState(defaultFormState);
  };

  function handleSubmit(e) {
    const handler = async () => {
      e.preventDefault();

      if (
        productName.length === 0 ||
        category.length === 0 ||
        description.length === 0 ||
        price.length === 0 ||
        quantity.length === 0
      ) {
        return;
      }
      try {
        const response = await handleUpload();
        alert("Product Added Successfully");
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
      id="addProductModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Product
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
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  class="form-control"
                  name="productName"
                  value={productName}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  class="form-control"
                  value={category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.data.name} >{category.data.name}</option>
                  )
                  )}
                </select>
              </div>
              <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="5"
                  value={description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="productImages" className="form-label">
                  Product Images
                </label>
                <input
                  className="form-control"
                  name="productImage"
                  type="file"
                  accept="/image/*"
                  id="productImages"
                  onChange={handleImgChange}
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="form-control"
                  value={price}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="form-control"
                  value={quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="row justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success mt-4 mb-4 w-75"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
