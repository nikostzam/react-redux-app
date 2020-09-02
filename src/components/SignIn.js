import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { signIn } from "../redux/actions/authActions";

const SignIn = ({ signIn }) => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>
          Sign In<span>.</span>
        </h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            signIn(values);
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

              <button type="submit" disabled={isSubmitting}>
                Sign In
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (values) => dispatch(signIn(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
