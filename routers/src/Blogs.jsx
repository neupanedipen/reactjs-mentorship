import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  };
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts/")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBlogs(data);
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <>
      <button onClick={fetchBlogs}>Fetch Posts</button>
      {blogs.map((blog) => {
        return (
          <Link to={`/blog/${blog.id}`}>
            <div key={blog.id}>
              <h1>{blog.title}</h1>
              <p>{blog.body}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Blogs;
