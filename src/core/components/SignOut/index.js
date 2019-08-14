import React, { Component } from 'react'
import { Auth } from 'aws-amplify'
import { Button } from 'shards-react'

class SignOut extends Component {
  async signOut() {
    const ga =
      window.gapi && window.gapi.auth2
        ? window.gapi.auth2.getAuthInstance()
        : null

    // Sign out of Google before signing out of Auth
    if (ga) await ga.signOut()

    // Sign out of Cognito Auth
    await Auth.signOut()
  }

  render() {
    return (
      <Button theme="danger" onClick={this.signOut} className="sidebarSignOut">
        Sign Out
      </Button>
    )
  }
}

export default SignOut
