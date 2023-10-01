import React from 'react'
import classes from './PortfolioVideos.module.css'
import PortfolioVideo from './PortfolioVideo'

const PortfolioVideos = () => {
  return (
    <section class={classes.portfolio_videos}>
        <PortfolioVideo/>
        <PortfolioVideo/>
    </section>
  )
}

export default PortfolioVideos