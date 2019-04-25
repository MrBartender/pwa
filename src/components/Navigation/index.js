import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <h1>Welcome, {this.props.user}!</h1>
    )
  }
}

export default Navigation;
