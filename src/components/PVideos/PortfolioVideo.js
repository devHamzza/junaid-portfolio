import React, { useState } from "react";
import classes from "./PortfolioVideo.module.css";

const PortfolioVideo = (props) => {
  const [loaded, setLoaded] = useState(false);

  const handleImgLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={classes.video}
      onClick={() => props.onClick()}
      data-aos="flip-up"
      data-aos-duration="1000"
    >
      <div
        className={`${classes["vid_img"]} ${classes["blurred-img"]} ${
          loaded ? classes["loaded"] : ""
        }`}
        style={{ backgroundImage: `url(${props.smallImgSrc})` }}
      >
        <img
          className=""
          src={props.imgSrc}
          alt=""
          loading="lazy"
          onLoad={handleImgLoad}
        />
      </div>
      <div className={classes.video_text}>
        <div className={classes.text_icon}>
          <i className="fa-solid fa-play"></i>
          <h2>{props.heading}</h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioVideo;
