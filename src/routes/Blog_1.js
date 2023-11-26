import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BlogBody from "../components/Blog/BlogBody";
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
