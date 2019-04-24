import React, { Component } from 'react';
import './style.css';

class Banner extends Component {
  render() {
    const image = this.props.image;
    return (
      <div className="bannerImageContainer">
        <img src={image} className="bannerImage" alt="Recipe Banner" />
      </div>
    );
  }
}

export default Banner;
