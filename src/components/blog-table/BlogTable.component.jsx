import AddBlogPosts from "../add-blog-posts/AddBlogPosts.component"

const BlogTable = () => {
  return (
    <>
        <div className='mb-4 row'>
            <div className="col-lg-6 col-sm-12">
                <h3>All Blogs Posts</h3>
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
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addBlogPostsModal"><i className="fa-solid fa-plus me-2"></i>Add Blog Post</button>
        </div>
            <div className="table-responsive">
            <table className="table bordered striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Discription</th>
                        <th>image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="table-active">Larry the Bird</td>
                        <td>@twitter</td>
                        <td><img src="..." className="img-thumbnail" alt="..."/></td>
                        <td>
                            <button type="button" className="btn btn-warning me-3"><i className="fa-solid fa-pen-to-square me-2"></i>Edit</button>
                            <button type="button" className="btn btn-danger"><i className="fa-solid fa-trash-can me-2"></i>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        {/* add blog post modal */}
        <AddBlogPosts/>
    </>
  )
}

export default BlogTable