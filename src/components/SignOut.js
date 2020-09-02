import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signOut } from "../redux/actions/authActions";

const SignOut = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, []);

  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignOut);
