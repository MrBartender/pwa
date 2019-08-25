import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import posed from 'react-pose'

import styles from './style.module.css'

const Bubble = posed.div({
  '/social': {
    left: '5vw',
    transition: {
      type: 'easeInOut',
      duration: 300,
    },
    flip: true,
  },
  '/collections': {
    left: '30vw',
    transition: {
      type: 'easeInOut',
      duration: 300,
    },
    flip: true,
  },
  '/data': {
    left: '55vw',
    transition: {
      type: 'easeInOut',
      duration: 300,
    },
    flip: true,
  },
  '/home': {
    left: '80vw',
    transition: {
      type: 'easeInOut',
      duration: 300,
    },
    flip: true,
  },
})

class Button extends Component {
  render() {
    const { route } = this.props

    return (
      <Bubble className={styles.button} pose={route.path}>
        <Link to={route.path}>
          <img
            src={route.icon}
            alt={route.name}
            style={{
              position: 'relative',
              top: '4.5vw',
              left: '5vw',
              width: '5vw',
              height: '5vw',
            }}
          />
        </Link>
      </Bubble>
    )
  }
}

export default Button
