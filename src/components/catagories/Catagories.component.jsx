import React from 'react'
import AddCatagory from '../add-catagories/AddCatagory.component'

const Catagories = () => {
  return (
    <>
        <div className='mb-4 row'>
            <div className="col-lg-6 col-sm-12">
                <h3>All Categories</h3>
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
        <div className='mb-4'>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addCatagorieModal"><i className="fa-solid fa-plus me-2"></i>Add Catagary</button>
        </div>
            <div className="table-responsive">
            <table className="table bordered striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Catagory Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="table-active">Larry the Bird</td>
                        <td>
                            <button type="button" className="btn btn-warning me-3"><i className="fa-solid fa-pen-to-square me-2"></i>Edit</button>
                            <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash-can me-2"></i>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <AddCatagory/>
    </>
  )
}

export default Catagories
