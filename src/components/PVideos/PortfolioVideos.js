import React from "react";
import { Link } from "react-router-dom";
import classes from "./PortfolioVideos.module.css";
import PortfolioVideo from "./PortfolioVideo";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import Img4 from "../../assets/4.jpg";
import Img5 from "../../assets/5.jpg";
import Img6 from "../../assets/6.jpg";

const PortfolioVideos = (props) => {
  const handleVideoClick = (id) => {
    props.getVideoId(id)
  };

  return (
    <section id="portfolio" className={classes.pfSect}>
      <h1 className={classes.pfHeading}>My Portfolio</h1>
      <Link className={classes.portfolio_videos} to="/videoPlayer">
        <PortfolioVideo
          onClick={() => handleVideoClick("video1")}
          heading="Video Editing Showreel"
          imgSrc={Img1}
        />
        <PortfolioVideo
          onClick={() => handleVideoClick("video2")}
          heading="Diet Niche Cash Cow Video"
          imgSrc={Img2}
        />
        <PortfolioVideo
          onClick={() => handleVideoClick("video3")}
          heading="Frieght Broker Promo Fina"
          imgSrc={Img3}
        />
        <PortfolioVideo
          onClick={() => handleVideoClick("video4")}
          heading="Instagram Reel, Tiktok and YT Shorts Video Editing"
          imgSrc={Img4}
        />
        <PortfolioVideo
          onClick={() => handleVideoClick("video5")}
          heading="Artificial Intellegence Cash Cow"
          imgSrc={Img5}
        />
        <PortfolioVideo
          onClick={() => handleVideoClick("video6")}
          heading="Finance Niche Cashcow"
          imgSrc={Img6}
        />
      </Link>
    </section>
  );
};

export default PortfolioVideos;
