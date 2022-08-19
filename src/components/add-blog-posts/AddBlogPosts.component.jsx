import { useState } from "react";

import { addBlogPosts } from "../../utils/firebase/firebasefirestore.utils";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "../../utils/firebase/firebaseauth.utils";

const defaultFormState = {
  postName: "",
  author: "",
  date: "",
  content: "",
};

const AddBlogPosts = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const { postName, author, date, content } = formState;

  const [file, setFile] = useState("");

  const [percent, setPercent] = useState(0);

  function handleImgChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    const handlerUp = async () => {
      if (!file) {
        alert("Please upload an image first!");
        return;
      }

      const storageRef = ref(storage, `/postimg/${file.name}`);

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
            addBlogPosts({
              postName,
              author,
              date,
              content,
              postImage: url.toString(),
            });
          });
        }
      );
      alert("Post Added Successfully");
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
        postName.length === 0 ||
        author.length === 0 ||
        date.length === 0 ||
        content.length === 0
      ) {
        return;
      }
      try {
        const response = await handleUpload();
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
      id="addBlogPostsModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Blog Post
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row container" onSubmit={handleSubmit}>
              <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="postName" className="form-label">
                  Post Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="postName"
                  name="postName"
                  value={postName}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  name="author"
                  value={author}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="content" className="form-label">
                  Article
                </label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  rows="5"
                  value={content}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div class="mb-3 col-lg-12 col-md-12 col-sm-12">
                <label htmlFor="articleImages" className="form-label">
                  Article Images
                </label>
                <input
                  className="form-control"
                  name="articleImage"
                  type="file"
                  id="articleImages"
                  onChange={handleImgChange}
                  accept="image/*"
                />
              </div>
              <div className="row justify-content-center">
                <button
                  type="submit"
                  className="btn btn-success mt-4 mb-4 w-75"
                >
                  Add Blog Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogPosts;
