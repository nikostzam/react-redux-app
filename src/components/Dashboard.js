import React from "react";
import { connect } from "react-redux";

const Dashboard = ({ auth }) => {
  return (
    <div className="container">
      <h1>Welcome back, {auth.firstName}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Dashboard);
