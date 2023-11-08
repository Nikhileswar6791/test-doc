import React, { useRef } from "react";
import "./Contactbody.css";
import "bootstrap/dist/css/bootstrap.css";
import emailjs from "@emailjs/browser";

const Contactbody = () => {
  const contactform = useRef();

  const contactsendEmail = (e) => {
    e.preventDefault();
    const contactsuccess = document.getElementById("contact-success");
    const contactdanger = document.getElementById("contact-danger");
    if (
      document.getElementById("contact-name").value === "" ||
      document.getElementById("contact-email").value === "" ||
      document.getElementById("contact-c-name").value === "" ||
      document.getElementById("contact-mob").value === ""
    ) {
      contactsuccess.style.display = "none";
      contactdanger.style.display = "block";
    } else {
      contactdanger.style.display = "none";
      contactsuccess.style.display = "block";
      emailjs.sendForm(
        "service_hkr3p5g",
        "template_qxiytl8",
        contactform.current,
        "OyStijACOhNSZ2tRe"
      );
      // .then(
      //   (result) => {
      //     console.log(result.text);
      //   },
      //   (error) => {
      //     console.log(error.text);
      //   }
      // );
    }
  };
  return (
    <div>
      <div className="contact">
        <div className="contact-head">
          <h4>Contact Us</h4>
          <p>
            Reach out to us for any queries about our product or would like to
            join us !!
          </p>
        </div>
        <div className="contact-form">
          <form ref={contactform} onSubmit={contactsendEmail}>
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-6 pt-0">
                  <p>Please fill the following details</p>
                </legend>
                <div className="col-sm-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radios"
                      id="r-1"
                      value="BUSINESS"
                    />
                    <label className="form-check-label" for="r-1">
                      Business
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radios"
                      id="r-2"
                      value="CAREERS"
                    />
                    <label className="form-check-label" for="gridRadios2">
                      Careers
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radios"
                      id="r-3"
                      value="CAREERS"
                    />
                    <label className="form-check-label" for="r-3">
                      Media
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radios"
                      id="r-4"
                      value="CAREERS"
                    />
                    <label className="form-check-label" for="r-4">
                      Industry Partnerships/Associations
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radios"
                      id="r-5"
                      value="OTHERS"
                    />
                    <label className="form-check-label" for="r-5">
                      Others
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="space-30"></div>
            <div className="form-group row">
              <div className="form-group col-md-6 Contact-col-1">
                <label for="contact-email">
                  <p>Email *</p>
                </label>
                <input
                  type="email"
                  className="form-control form-text"
                  id="contact-email"
                  name="contact-email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group col-md-6 Contact-col-2">
                <label for="contact-name">
                  <p>Name *</p>
                </label>
                <input
                  type="text"
                  name="contact-name"
                  className="form-control form-text"
                  id="contact-name"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="space-30"></div>
            <div className="form-group row">
              <div className="form-group col-md-6 Contact-col-1">
                <label for="contact-c-name">
                  <p>Company Name *</p>
                </label>
                <input
                  type="text"
                  className="form-control form-text"
                  id="contact-c-name"
                  name="contact-c-name"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group col-md-6 Contact-col-2">
                <label for="contact-mob">
                  <p>Mobile number *</p>
                </label>
                <input
                  type="tel"
                  name="contact-mob"
                  className="form-control form-text"
                  id="contact-mob"
                  placeholder="Enter your 10 digit mobile number"
                  pattern="[0-9]{10}"
                />
              </div>
            </div>
            <div className="space-30"></div>
            <div
              className="form-group row col-md-12"
              style={{ paddingLeft: "10px" }}
            >
              <label for="contact-textarea">
                <p>Anything you want to tell us</p>
              </label>
              <textarea
                className="form-control"
                id="contact-textarea"
                name="contact-textarea"
                rows="5"
              ></textarea>
            </div>
            <div id="contact-success" className="Contact-success">
              <p>
                <span role="img" aria-label="tick">
                  ✅
                </span>
                Thank you for submitting your details. We will reach out to you
                soon.
              </p>
            </div>
            <div id="contact-danger" className="Contact-danger">
              <p>Fields with * can't be empty.</p>
            </div>
            <input type="submit" className="button" value="Submit" />
          </form>
        </div>
      </div>
      <div className="contact-body"></div>
    </div>
  );
};

export default Contactbody;
