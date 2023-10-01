import React from "react";
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer id="contact">
      <div className={classes.contact}>
        <div className={classes.email}>
          <h2>Contact for Work Enquiries</h2>
          <p>junaidalikhan752@gmail.com</p>
        </div>
        <div className={classes.socialLinks}>
          <a href="https://www.linkedin.com/in/junaidedits/">
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://twitter.com/Junaidalivlogs">
            <i className="fa-brands fa-square-x-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="https://instagram.com/junaidalivlogs?igshid=MmU2YjMzNjRlOQ==">
            <i className="fa-brands fa-square-instagram"></i>
            <span>Instagram</span>
          </a>
          <a href="https://www.facebook.com/junaidalivlogs">
            <i className="fa-brands fa-square-facebook"></i>
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
