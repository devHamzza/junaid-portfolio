import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>junaideditz</h1>
      </div>

      <div className="navigations">
        <ul>
          <li>
            <NavLink className="navlink" to="/" exact>Home </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/about">About </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <a className="navlink" href="#contact">Contact Us </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
