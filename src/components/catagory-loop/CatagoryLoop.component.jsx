import { useState, useEffect } from "react";

import { getCatagoriesToLoop, getNextCatagoriesToLoop } from "../../utils/firebase/firebasefirestore.utils";

import './CatagoryLoop.styles.css';

const CatagoryLoop = () => {
  const [catagories, setCatagories] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    getCatagoriesToLoop().then((catagorieData) => {
      setCatagories(catagorieData.data);
      setLastItem(catagorieData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextCatagoriesToLoop(lastItem).then((catagorieData) => {
      setCatagories([...catagories, ...catagorieData.data])
      setLastItem(catagorieData.lastVisible);
    });
  }

  return (
    <>
    <div className="d-flex row">
      {catagories.map((category) => (
        <div className="col-sm-12 col-lg-2 col-md-4" key={category.count}>
          <a href={"/shop?category="+category.data.name}>
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
          </a>
        </div>
      ))}
    </div>
    </>
  );
};

export default CatagoryLoop;
