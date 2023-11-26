import React from "react";
import Body from "../components/Body/Body";
import Form from "../components/Form/Form";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";

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
