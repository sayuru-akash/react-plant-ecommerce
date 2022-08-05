import { useState, useEffect } from "react";

import { getCatagoriesToLoop } from "../../utils/firebase/firebasefirestore.utils";

import './CatagoryLoop.styles.css';

const CatagoryLoop = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCatagoriesToLoop().then((categories) => setCategories(categories));
  }, []);

  return (
    <>
      {categories.map((category) => (
        <div className="col-sm-12 col-lg-2 col-md-4" key={category.count}>
          <div className="card m-2">
            <img
              className="card-img-top category-img"
              src={category.data.image}
              alt={category.data.name}
            />
            <div className="card-body">
              <h5 className="card-title">{category.data.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CatagoryLoop;
