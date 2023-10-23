import React from "react";
import "./BlogsBody.css";
import about_5 from "../images/useful_images_svg/about-6.webp";
import blog_1 from "../images/useful_images_svg/blog_1.jpeg";
import blog_2 from "../images/useful_images_svg/blog_2.jpeg";
import blog_3 from "../images/useful_images_svg/blog_3.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const BlogsBody = () => {
  return (
    <div className="blogs">
      <div className="blogs-header">
        {" "}
        <h4>Doctorspectra News .......</h4>
        {/* <div className="head-p">
          <p> </p>
        </div> */}
      </div>

      <div className="blogsBody row">
        {/*
      <div classNameName="blogsBody">
        <div classNameName="col-lg-3 blogCard">
          <a href="/">
            <div classNameName="blog-in">
              <LazyLoadImage
                src={about_1}
                alt="rati"
                loading="lazy"
              ></LazyLoadImage>
              <p classNameName="blog-author">BY Rati Gugnani</p>
              <p classNameName="blog-text">
                {" "}
                It has been all about our access to food
              </p>
            </div>
          </a>
        </div> */}
        {/* </div> */}
        <div className="col-lg-4 col-md-6">
          <a href="/blogs/:1">
            <div className="container-blogs ">
              <div className="blog_card">
                <LazyLoadImage src={blog_1} className="card_image" alt="blog" />
                <div className="card_text">
                  {/* <div className="tags">quality</div>
                <div className="tags">quality</div> */}
                  <h2 className="title">
                    {" "}
                    Modern day Food Quality Assessment Techniques
                  </h2>
                  <div className="summary">
                    Food quality assessment is a critical aspect of the modern
                    food industry, ensuring that the food we consume meets
                    certain standards of safety, nutritional value, and sensory
                    attributes. Advances in technology have led to the
                    development of various sophisticated techniques and
                    methods...
                  </div>
                </div>
                <div className="card_footer">
                  <LazyLoadImage
                    className="author_image"
                    src={about_5}
                    alt="Nested Software"
                  />
                  <div className="reading_time">10 min read</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="/blogs/:2">
            <div className="container-blogs ">
              <div className="blog_card">
                <LazyLoadImage src={blog_2} className="card_image" alt="blog" />
                <div className="card_text">
                  {/* <div className="tags">PyTorch</div> */}
                  <h2 className="title">
                    {" "}
                    "From Farm to Fork, Let's Minimize Food Waste and Feed the
                    Nation"
                  </h2>
                  <div className="summary">
                    Food wastage is indeed a significant issue in India, as well
                    as globally. In India, the problem of food wastage occurs at
                    various stages of the food supply chain, from production and
                    processing to distribution...
                  </div>
                </div>
                <div className="card_footer">
                  <LazyLoadImage
                    className="author_image"
                    src={about_5}
                    alt="Nested Software"
                  />
                  <div className="reading_time">5 min read</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="/blogs/:3">
            <div className="container-blogs ">
              <div className="blog_card">
                <LazyLoadImage src={blog_3} className="card_image" alt="blog" />
                <div className="card_text">
                  {/* <div className="tags">PyTorch</div> */}
                  <h2 className="title">
                    {" "}
                    Understanding India's Low Farm Yields: A Global Perspective
                  </h2>
                  <div className="summary">
                    India, with its vast agricultural landscape and diverse
                    agro-climatic zones, has been an agricultural hub for
                    centuries. However, despite its potential, the country faces
                    a persistent challenge: extremely low farm yields compared
                    to...
                  </div>
                </div>
                <div className="card_footer">
                  <LazyLoadImage
                    className="author_image"
                    src={about_5}
                    alt="Nested Software"
                  />
                  <div className="reading_time">5 min read</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogsBody;
