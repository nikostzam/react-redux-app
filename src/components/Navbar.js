import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <h2>
              Redux-app<span>.</span>
            </h2>
          </div>
          <ul>
            <li>
              <Link to="/create">Create Project</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/signOut">Sign Out</Link>
            </li>
            <li>
              <Link to="/signIn">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(Navbar);
