import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section>
      <div
        className={classes["aboutImg"]}
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <h1>About Us</h1>
      </div>
      <div className={classes.flexContainer}>
        <div
          className={classes.flexBoxes}
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div className={classes.aboutSideImg}>
            <img
              src="https://images.unsplash.com/photo-1490810194309-344b3661ba39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80"
              alt="Boy Doing Video Editing"
            />
          </div>
          <div className={classes.aboutText}>
            <h2>WE DELIVER MEASURABLE RESULTS</h2>
            <p>
              Unlock the potential of your content with expert video editing
              services. Elevate your videos to cash generating assets. Contact
              us today for seamless captivating results.
            </p>
            <p>
              We specialize in editing a wide range of cash cow videos,
              including:
            </p>
            <ul className={classes.features}>
              <li>
                <i class="fa-solid fa-video"></i> Professional Editing
              </li>
              <li>
                <i class="fa-solid fa-file-video"></i> Video Editing Showreel
              </li>
              <li>
                <i class="fa-solid fa-display"></i> Attention-Grabbing Visuals
              </li>
              <li>
                <i class="fa-solid fa-photo-film"></i> Engaging Transitions
              </li>
              <li>
                <i class="fa-solid fa-computer"></i>Tutorial Video editing{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
