import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Htwbody from "../components/HtwBody/Htwbody";
import Form from "../components/Form/Form";

const Htw = () => {
  return (
    <div>
      <Navbar />
      <Htwbody />
      <Form />
      <Footer />
    </div>
  );
};

export default Htw;
