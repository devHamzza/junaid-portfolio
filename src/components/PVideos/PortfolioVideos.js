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
import sImg1 from "../../assets/1s.jpg";
import sImg2 from "../../assets/2s.jpg";
import sImg3 from "../../assets/3s.jpg";
import sImg4 from "../../assets/4s.jpg";
import sImg5 from "../../assets/5s.jpg";
import sImg6 from "../../assets/6s.jpg";

const PortfolioVideos = (props) => {
  const handleVideoClick = (id) => {
    props.getVideoId(id);
  };

  return (
    <section id="portfolio" className={classes.pfSect}>
      <h1 className={classes.pfHeading}>My Portfolio</h1>
      <div className={classes.portfolio_videos}>
        <Link to="/videoPlayer">
          <PortfolioVideo
            onClick={() => handleVideoClick("video1")}
            heading="Video Editing Showreel"
            imgSrc={Img1}
            smallImgSrc={sImg1}
          />
        </Link>
        <Link to="/videoPlayer">
          <PortfolioVideo
            onClick={() => handleVideoClick("video2")}
            heading="Diet Niche Cash Cow Video"
            imgSrc={Img2}
            smallImgSrc={sImg2}
          />
        </Link>
        <Link to="/videoPlayer">
          <PortfolioVideo
            onClick={() => handleVideoClick("video3")}
            heading="Frieght Broker Promo Final"
            imgSrc={Img3}
            smallImgSrc={sImg3}
          />
        </Link>
        <Link to="/videoPlayer">
          <PortfolioVideo
            onClick={() => handleVideoClick("video4")}
            heading="Instagram Reel, Tiktok and YT Shorts Video Editing"
            imgSrc={Img4}
            smallImgSrc={sImg4}
          />
        </Link>
        <Link to="/videoPlayer">
          <PortfolioVideo
            onClick={() => handleVideoClick("video5")}
            heading="Artificial Intellegence Cash Cow"
            imgSrc={Img5}
            smallImgSrc={sImg5}
          />
        </Link>
        <Link to="/videoPlayer">
          <PortfolioVideo
            onClick={() => handleVideoClick("video6")}
            heading="Finance Niche Cashcow"
            imgSrc={Img6}
            smallImgSrc={sImg6}
          />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioVideos;
