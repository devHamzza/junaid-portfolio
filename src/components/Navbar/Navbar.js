import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <h1>junaideditz</h1>
      </div>

      <div className={classes.navigations}>
      <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio </Link>
          </li>
          <li>
            <a href="#contact">Contact Us </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
