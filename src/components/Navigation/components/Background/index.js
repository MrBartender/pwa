import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import posed from 'react-pose'

import BodyImage from './media/body.png'
import { background, backgroundImg } from './style.module.css'

const Slider = posed.div({
  '/social': {
    left: '-87.5vw',
    transition: {
      duration: 300,
      ease: 'easeInOut',
    },
    flip: true,
  },
  '/collections': {
    left: '-62.5vw',
    transition: {
      duration: 300,
      ease: 'easeInOut',
    },
    flip: true,
  },
  '/data': {
    left: '-37.5vw',
    transition: {
      duration: 300,
      ease: 'easeInOut',
    },
    flip: true,
  },
  '/home': {
    left: '-12.5vw',
    transition: {
      duration: 300,
      ease: 'easeInOut',
    },
    flip: true,
  },
})

class Background extends Component {
  render() {
    const { location } = this.props

    return (
      <Slider pose={location.pathname} className={background}>
        <img
          src={BodyImage}
          className={backgroundImg}
          alt="white navigation background"
        />
      </Slider>
    )
  }
}

export default withRouter(Background)
