// import { useState } from "react";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import Blogs from "./Blogs";
import Error from "./Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
