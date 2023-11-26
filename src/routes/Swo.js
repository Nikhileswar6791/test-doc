import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Swobody from "../components/SwoBody/Swobody";

import "../styles.css";
import Form from "../components/Form/Form";

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
