import React from "react";
import { Link, NavLink } from "react-router-dom";
//STATELESS FUNCTIONAL COMPONENT
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="" className="navbar-brand">
          Welcome
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/movies" className="nav-item nav-link">
              Movies
            </NavLink>

            <NavLink to="/customers" className="nav-item nav-link">
              Customers
            </NavLink>

            <NavLink to="/Rentals" className="nav-item nav-link">
              Rentals
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
