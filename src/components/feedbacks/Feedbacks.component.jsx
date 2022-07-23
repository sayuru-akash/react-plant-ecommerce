import React from 'react'

const Feedbacks = () => {
  return (
    <>
        <div className='mb-5 row'>
            <div className="col-lg-6 col-sm-12">
                <h3>Feedbacks</h3>
            </div>
            <div className="col-lg-6 col-sm-12">
                <form className="d-flex">
                    <input
                    className="form-control me-2 search-item"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
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
                        <th>Feedback</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="table-active">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <button type="button" className="btn btn-primary me-2"><i class="fa-solid fa-eye me-2"></i>View</button>
                            <button type="button" className="btn btn-danger me-2"><i className="fa-solid fa-trash-can me-2"></i>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Feedbacks