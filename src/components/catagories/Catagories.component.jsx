import {useState, useEffect} from "react";
import AddCatagory from "../add-catagories/AddCatagory.component";

import { getCatagories, getNextCatagories, deleteCategory, editCategory } from "../../utils/firebase/firebasefirestore.utils";

const defaultCategoryFormState = {
  name:"",
};

const Catagories = () => {
  const defaultFormState = {
    searchKey: "",
  };

  const [formState, setFormState] = useState(defaultFormState);
  const {searchKey} = formState;

  const [catagories, setCatagories] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  const [categoryFormState, setCategoryFormState] = useState(defaultCategoryFormState);
  const { categoryName } = categoryFormState;

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        getCatagories(searchKey).then((categorieData) => {
          setCatagories(categorieData.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };

  const handleEditCategory = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        await editCategory(categoryFormState);
      } catch (error) {
        console.log(error);
      }
    };

    handler().catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    getCatagories(searchKey).then((catagorieData) => {
      setCatagories(catagorieData.data);
      setLastItem(catagorieData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextCatagories(lastItem).then((catagorieData) => {
      setCatagories([...catagories, ...catagorieData.data])
      setLastItem(catagorieData.lastVisible);
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleChangeCategory = (event) => {
    const { name, value } = event.target;
    setCategoryFormState({ ...categoryFormState, [name]: value });
  }


  return (
    <>
      <div className="mb-4 row">
        <div className="col-lg-6 col-sm-12">
          <h3>All Categories</h3>
        </div>
        <div className="col-lg-6 col-sm-12">
          <form onSubmit={handleSubmit} className="d-flex">
            <input
              className="form-control me-2 search-item"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              name="searchKey"
              value={searchKey}
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="mb-4">
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addCatagorieModal"
        >
          <i className="fa-solid fa-plus me-2"></i>Add Category
        </button>
      </div>
      <div className="table-responsive">
        <table className="table bordered striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {catagories.map((category, index) => (
              <tr key={category.id}>
                <th scope="row">{index}</th>
                <td>{category.data.name}</td>
                <td>
                <button type="button" className="btn btn-warning me-3"
                data-bs-toggle="modal"
                data-bs-target="#editCatagorieModal"
                onClick={() => {
                  setCategoryFormState({
                    ...formState,
                    id: category.id,
                    name: category.data.name,
                  });
                }}
                >
                  <i className="fa-solid fa-pen-to-square me-2"
                  ></i>Edit
                </button>
                <button onClick={() => deleteCategory(category.id)} className="btn btn-danger">
                  <i className="fa-solid fa-trash-can me-2"></i>Delete
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button class="btn btn-outline-dark shadow-none" onClick={loadNext}>Load More...</button>
      </div>
      <AddCatagory/>
      <div
      className="modal fade"
      id="editCatagorieModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Category
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
              onSubmit={handleEditCategory}
            >
              <div className="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="bane" className="form-label">
                  Category Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  name="name"
                  value={categoryFormState.name}
                    onChange={handleChangeCategory}
                />
              </div>
              <div className="row justify-content-center">
                <button
                  type="submit"
                  className="btn btn-warning mt-4 mb-4 w-75"
                >
                  Edit Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Catagories;
