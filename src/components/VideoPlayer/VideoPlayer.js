import React from "react";
import classes from "./VideoPlayer.module.css";

const videoData = {
  video1: "https://www.youtube.com/embed/ABo6mWPm6E8?si=NqAQKvWcLmjkOzTk",
  video2: "https://www.youtube.com/embed/Ai8tAcCtzHo?si=2Y5HCDBA9kBnYyxL",
  video3: "https://www.youtube.com/embed/kYXRfSU1VUA?si=krdCRwJPkjndMWyX",
  video4: "https://www.youtube.com/embed/eGdNfHoo8YU?si=tzZ34a9Hazjyc0Ji",
  video5: "https://www.youtube.com/embed/jOpzUuEJ-lo?si=JVlQJYg88svLPu_-",
  video6: "https://www.youtube.com/embed/V4dcZIuYqaE?si=mJR20xF_S98j9XEY",
};

const VideoPlayer = (props) => {
  return (
    <div className={classes.frameContainer}>
      <iframe
        src={
          props.videoId
            ? videoData[props.videoId]
            : "https://www.youtube.com/embed/ABo6mWPm6E8?si=NqAQKvWcLmjkOzTk"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
