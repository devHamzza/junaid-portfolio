import React from 'react'
import classes from './PortfolioVideo.module.css'

const PortfolioVideo = () => {
  return (
    <div class={classes.video}>
            <div class={classes.video_text}>
                <div class={classes.text_icon}>
                    <i class="fa-solid fa-play"></i>
                    <h2>Video Editing Showreel</h2>
                </div>
            </div>
        </div>
  )
}

export default PortfolioVideo