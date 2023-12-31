import React, { useRef } from "react";
import "../Body/Bodycss.css";
import "./Formcss.css";
import "bootstrap/dist/css/bootstrap.css";
import emailjs from "@emailjs/browser";
import im_15 from "../../images/useful_images_svg/image15.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const success = document.getElementById("success");
    const danger = document.getElementById("danger");
    if (
      document.getElementById("Name").value === "" ||
      document.getElementById("Email").value === "" ||
      document.getElementById("c-Name").value === ""
    ) {
      success.style.display = "none";
      danger.style.display = "block";
    } else {
      danger.style.display = "none";
      success.style.display = "block";
      const ser_id = process.env.REACT_APP_SERID;
      console.log(ser_id);
      const id = process.env.REACT_APP_ID;
      console.log(id);
      const temp_id = process.env.REACT_APP_TEMP_1;
      console.log(temp_id);
      emailjs.sendForm(ser_id, temp_id, form.current, id);
    }
  };
  return (
    <div>
      <div className="contact-img">
        <LazyLoadImage
          src={im_15}
          width={"50%"}
          alt="contact-img"
        ></LazyLoadImage>
      </div>
      <div className="row form">
        <div className="col-md-6">
          <h4 className="text">Would like to see a demo, Reach out to us</h4>
        </div>
        <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row mb-3">
              <label htmlFor="Email" className="col-sm-2 col-form-label">
                <p>Email</p>
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name="Email"
                  className="form-control form-text"
                  id="Email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                <p>Name</p>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="Name"
                  className="form-control form-text"
                  id="Name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="c-Name" className="col-sm-2 col-form-label">
                <p>Company Name</p>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="c-Name"
                  className="form-control form-text"
                  id="c-Name"
                />
              </div>
            </div>
            <div id="success">
              <p>
                <span role="img" aria-label="tick">
                  ✅
                </span>
                Thank you for submitting your details. We will reach out to you
                soon.
              </p>
            </div>
            <div id="danger">
              <p>Fields can't be empty.</p>
            </div>
            <input type="submit" className="button" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
