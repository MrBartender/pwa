import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import styles from './style.module.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class LoadingPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Loader
          type="Triangle"
          visible={true}
          height={200}
          width={200}
          color="white"
        />
      </div>
    )
  }
}

export default LoadingPage
