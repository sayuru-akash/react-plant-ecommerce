import { useState, useEffect } from "react";

import { getMessages, getNextMessages } from "../../utils/firebase/firebasefirestore.utils";

const Feedbacks = () => {
  const defaultFormState = {
    searchKey: "",
  };

  const [formState, setFormState] = useState(defaultFormState);
  const {searchKey} = formState;

  const [messages, setMessages] = useState([]);
  const [lastItem, setLastItem] = useState(null);

  const handleSubmit = (event) => {
    const handler = async () => {
      event.preventDefault();
      try {
        getMessages(searchKey).then((messageData) => {
          setMessages(messageData.data);
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
    getMessages(searchKey).then((messageData) => {
      setMessages(messageData.data);
      setLastItem(messageData.lastVisible);
    });
  }, []);

  const loadNext = ()=>{
    getNextMessages(lastItem).then((messageData) => {
      setMessages([...messages, ...messageData.data])
      setLastItem(messageData.lastVisible);
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <div className="mb-5 row">
        <div className="col-lg-6 col-sm-12">
          <h3>Feedbacks</h3>
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
      <div className="table-responsive">
        <table className="table bordered striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={message.id}>
                <th scope="row">{index}</th>
                <td>{message.data.name}</td>
                <td>{message.data.email}</td>
                <td>{message.data.subject}</td>
                <td>
                  <button type="button" className="btn btn-primary me-2">
                    <i class="fa-solid fa-eye me-2"></i>View
                  </button>
                  <button type="button" className="btn btn-danger me-2">
                    <i className="fa-solid fa-trash-can me-2"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button class="btn btn-outline-dark shadow-none" onClick={loadNext}>Load More...</button>
      </div>
    </>
  );
};

export default Feedbacks;
