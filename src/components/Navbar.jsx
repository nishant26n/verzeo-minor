import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <NavLink className="logo" to="/">
          <h2>NAV</h2>
        </NavLink>

        <div className="nav-container">
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                about
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/services">
                services
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/products">
                products
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
