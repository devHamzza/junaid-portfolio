import React, { useEffect, useRef, useState } from "react";
import JunaidProfile from "../../assets/new profile.png";
import BgVideo from "../../assets/bgVideo.mp4";
import classes from "./Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Hero = () => {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const imgLoadHandler = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Handle the error or show a play button for user interaction
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <section className={classes.hero}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className={classes.videoBackground}
        data-aos="zoom-out-up"
        data-aos-duration="800"
      >
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div
        className={classes.hero_text}
        data-aos="zoom-out-up"
        data-aos-duration="800"
      >
        <h1>
          Hey There, <br />
          I’m junaid
        </h1>
        <p>Freelance Video Editor</p>
      </div>
      <div
        className={classes.hero_img}
        data-aos="zoom-out-up"
        data-aos-duration="800"
      >
        <div className={`${classes["blurredPf"]} ${loaded ? classes["loaded"] : ''}`}>
          <img src={JunaidProfile} alt="Profile" onLoad={imgLoadHandler} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
