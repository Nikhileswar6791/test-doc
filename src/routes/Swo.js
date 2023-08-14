import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swobody from "../components/Swobody";

import "../styles.css";
import Form from "../components/Form";

const Swo = () => {
  return (
    <div>
      <Navbar />
      <Swobody />
      <Form />
      <Footer />
    </div>
  );
};

export default Swo;
