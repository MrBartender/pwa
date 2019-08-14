import React, { Component } from 'react'

import SignOut from '../../core/components/SignOut'

class Consumer extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <h1 style={{ color: 'white' }}>Hello from the Consumer page</h1>
        <div>{user.name}</div>
        <SignOut />
      </div>
    )
  }
}

export default Consumer
