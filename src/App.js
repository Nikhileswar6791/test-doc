import "./styles.css";
import Home from "./routes/Home";
import Blogs from "./routes/Blogs";
import Htw from "./routes/Htw";
import Swo from "./routes/Swo";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/dist/umd/react-router-dom.development";
import React from "react";
import About from "./routes/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how technology works" element={<Htw />} />
          <Route path="/Solutions we offer" element={<Swo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
