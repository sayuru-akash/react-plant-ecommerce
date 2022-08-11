import "./BlogSingle.styles.css";

const BlogSingle = () => {
  return (
    <div className="container mt-5 mb-5 row mx-auto">
      <img
        src="https://images.unsplash.com/photo-1597305877032-0668b3c6413a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
        className="product-image img-thumbnail mt-4"
        alt="..."
      />
      <h2 className="mt-5">Title</h2>
      <h4 className="text-start">auther</h4>
      <p className="text-start">date</p>
      <p className="mt-5 text-start">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default BlogSingle;
