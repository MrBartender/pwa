import React, { Component } from 'react'

class ProfileSelect extends Component {
  render() {
    const { selectProfile } = this.props
    return (
      <div>
        <h1 style={{ color: 'white' }}>Choose a Profile</h1>
        <div>
          <button onClick={() => selectProfile('vendor')}>Vendor</button>
          <button onClick={() => selectProfile('consumer')}>Consumer</button>
        </div>
      </div>
    )
  }
}

export default ProfileSelect
