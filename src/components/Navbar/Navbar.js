import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <h1>junaideditz</h1>
      </div>

      <div className={classes.navigations}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="#contact">Contat Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
