import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogBody from "../components/BlogBody";
const Blog_1 = ({ id }) => {
  return (
    <div>
      <Navbar />
      <BlogBody id={id} />
      <Footer />
    </div>
  );
};

export default Blog_1;
