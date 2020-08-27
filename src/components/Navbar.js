import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='header-wrapper'>
          <div className='logo'>
            <h2>
              Redux-app<span>.</span>
            </h2>
          </div>
          <ul>
            <li>
              <Link to='/create'>Create Project</Link>
            </li>
            <li>
              <Link to='/'>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
