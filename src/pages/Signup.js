import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
import "../style.css";
import createUser from "../function/user/User";
import axios from "axios";
// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

const validateName = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validateMobileNumber = (value) => {
  let error;
  if (!value) {
    error = required;
  }
  return error;
};

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = required;
  }
  return error;
};

export default function Signup() {
  return (
    <Formik
      initialValues={{
        Name: "",
        Mobile: "",
        Email: "",
        Password: "",
      }}
      onSubmit={(data) => {
        //console.log(data);
        axios({
          method: "POST",
          url: "https://c1inkx-3001.preview.csb.app/users/create",
          data: data,
        })
          .then(function (res) {
            console.log("hi res", res);
            alert("Successfully signed up!");
          })
          .catch(function (res) {
            //console.log(res);
          });
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className="container">
          <div className="col-sm-12">
            <h3>User Signup</h3>
          </div>
          <div className="col-sm-12">
            <Form>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="Name"
                  validate={validateName}
                />
                {errors.Name && touched.Name && errorMessage(errors.Name)}
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  name="Email"
                  className="form-control"
                  placeholder="Email"
                  validate={validateEmail}
                />
                {errors.Email && touched.Email && errorMessage(errors.Email)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="tel"
                  placeholder="Mobile number"
                  name="Mobile"
                  validate={validateMobileNumber}
                />
                {errors.Mobile && touched.Mobile && errorMessage(errors.Mobile)}
              </div>

              <div className="form-group">
                <Field
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="Password"
                  validate={validatePassword}
                />
                {errors.Password &&
                  touched.Password &&
                  errorMessage(errors.Password)}
              </div>

              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
