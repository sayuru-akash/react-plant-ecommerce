import {useState, useEffect} from "react";
import AddCatagory from "../add-catagories/AddCatagory.component";

import { getCatagories, getNextCatagories, deleteCategory } from "../../utils/firebase/firebasefirestore.utils";
import EditCatagories from "../edit-categories/EditCatagories.component";

const Catagories = () => {
  const defaultFormState = {
    searchKey: "",
  };

  const [formState, setFormState] = useState(defaultFormState);
  const {searchKey} = formState;

  const [catagories, setCatagories] = useState([]);
  const [lastItem, setLastItem] = useState(null);

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
                data-bs-target="#editCatagorieModal">
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
      <EditCatagories/>
    </>
  );
};

export default Catagories;
