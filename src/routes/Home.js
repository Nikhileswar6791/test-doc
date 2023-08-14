import React from "react";
import Body from "../components/Body";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

import "../styles.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Body />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
