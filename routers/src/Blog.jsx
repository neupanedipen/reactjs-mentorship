import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Blog = () => {
  const [post, setPost] = useState({});
  const [name, setName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name} */}
    </>
  );
};

export default Blog;
