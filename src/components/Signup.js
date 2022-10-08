import React, { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import { db } from "../firebase";

function Signup() {

  const [user,setUser] = useState({
    name:"",
    email:"",
    gender:"",
    birthday:"",
    password:""
  })

  let name,value;
  const handleInputChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users").add({
      name:user.name,
      email:user.email,
      gender:user.gender,
      birthday:user.birthday,
      password:user.password
    })
    .then(() => {
      alert("User added successfully");
      setUser({name:"",email:"",  gender:"",birthday:"",password:""})
    })
    .catch((error) => {
      alert(error.message);
    });
  }
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
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
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
                          />
                          <label className="form-label" htmlFor="firstName">
                            Name
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="date"
                            className="form-control form-control-lg"
                            id="birthdayDate"
                            placeholder="DD/MM/YYYY"
                            name="birthday"
                            value={user.birthday}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="birthdayDate" className="form-label">
                            Birthday
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value={user.gender}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value={user.gender}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value={user.gender}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                            value={user.email}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="phoneNumber"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleInputChange}
                          />
                          <label className="form-label" htmlFor="phoneNumber">
                            Password
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Register"
                      />
                    </div>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account?{" "}
                      <NavLink to="/login" className="link-danger">
                        Login
                      </NavLink>
                    </p>
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

export default Signup;
