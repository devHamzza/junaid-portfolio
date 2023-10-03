import React from 'react'
import classes from './PortfolioVideo.module.css'

const PortfolioVideo = (props) => {
  return (
    <div className={classes.video} onClick={() => props.onClick()} style={{backgroundImage: `url(${props.imgSrc})`}} data-aos="flip-up" data-aos-duration="1000">
            <div className={classes.video_text}>
                <div className={classes.text_icon}>
                    <i className="fa-solid fa-play"></i>
                    <h2>{props.heading}</h2>
                </div>
            </div>
        </div>
  )
}

export default PortfolioVideo