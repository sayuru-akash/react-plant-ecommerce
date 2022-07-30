
const AddBlogPosts = () => {
  return (
    <div className="modal fade" id="addBlogPostsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header text-center">
                <h5 className="modal-title" id="exampleModalLabel">Add Blog Post</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form className="row container">
                    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="postName" className="form-label">Post Name</label>
                        <input type="text" class="form-control" name="postName"/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="writerName" className="form-label">Writer Name</label>
                        <input type="text" class="form-control" name="writerName"/>
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="article" className="form-label">Article</label>
                        <textarea className="form-control" name="article" rows="5"></textarea>
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="articleImages" className="form-label">Article Images</label>
                        <input className="form-control" name="articleImage" type ="file" multiple/>
                    </div>
                    <div className="row justify-content-center">
                        <button type="submit" className="btn btn-success mt-4 mb-4 w-75">Add Blog Post</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
  )
}

export default AddBlogPosts