import React, { useState } from "react";
import "./Contact.css";
import { db } from "../firebase";

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    userMessage: "",
  });

  let name, value;
  const handleInputChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("queries")
      .add({
        name: user.name,
        email: user.email,
        subject: user.subject,
        userMessage: user.userMessage,
      })
      .then(() => {
        alert("Query Submitted Successfully");
        setUser({
          name: "",
          email: "",
          subject: "",
          userMessage: "",
        });
      })
      .catch((error) => {
        alert(error.message);
      });
    // naviagte("/home");
  };

  return (
    <>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Contact Us:</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder="First Name"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-label" htmlFor="firstName">
                            Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder="Enter Subject"
                            name="subject"
                            value={user.subject}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-label" htmlFor="subject">
                            Subject
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-2 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                            value={user.email}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2 pb-2">
                        <div className="form-outline">
                          <textarea
                            type="textarea"
                            id="phoneNumber"
                            name="userMessage"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Message"
                            value={user.userMessage}
                            onChange={handleInputChange}
                            required
                          />
                          <label className="form-label" htmlFor="message">
                            Message
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                    {/* <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account?{" "}
                      <NavLink to="/login" className="link-danger">
                        Login
                      </NavLink>
                    </p> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
