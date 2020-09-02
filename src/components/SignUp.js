import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { createUser } from "../redux/actions/authActions";

const SignUp = ({ createUser }) => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>
          Create an account<span>.</span>
        </h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmpassword: "",
            firstName: "",
            lastName: "",
          }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            await createUser(values);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Enter your e-mail"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder="Enter your password"
              />
              <label htmlFor="confirmpassword">Confirm your password</label>
              <input
                type="password"
                name="confirmpassword"
                onChange={handleChange}
                value={values.confirmpassword}
                placeholder="Confirm your password"
              />
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                placeholder="Enter your first name"
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                placeholder="Enter your last name"
              />
              <button type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (values) => dispatch(createUser(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
