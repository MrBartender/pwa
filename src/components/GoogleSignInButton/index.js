import React, { Component } from 'react'
import { Auth } from 'aws-amplify'

class GoogleSignInButton extends Component {
  constructor(props) {
    super(props)
    this.createScript = this.createScript.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  componentDidMount() {
    const ga =
      window.gapi && window.gapi.auth2
        ? window.gapi.auth2.getAuthInstance()
        : null
    if (!ga) this.createScript()
  }

  createScript() {
    // load the Google SDK
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.async = true
    script.crossorigin = 'anonymous'
    script.onload = () => {
      // init the Google SDK client
      const g = window.gapi
      g.load('auth2', () => {
        g.auth2
          .init({
            client_id:
              '167223859798-utaf2kgse8chgj6qldv85ddml63net4k.apps.googleusercontent.com',
            // authorized scopes
            scope: 'profile email openid',
          })
          .then(() => {
            this.renderButton()
          })
      })
    }
    document.body.appendChild(script)
  }

  async getAWSCredentials(googleUser) {
    const { id_token, expires_at } = googleUser.getAuthResponse()
    const profile = googleUser.getBasicProfile()
    let user = {
      email: profile.getEmail(),
      name: profile.getName(),
    }

    const credentials = await Auth.federatedSignIn(
      'google',
      { token: id_token, expires_at },
      user
    )
    console.log('credentials', credentials)
  }

  renderButton() {
    window.gapi.signin2.render('googleSignIn', {
      scope: 'profile email',
      width: 240,
      height: 40,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.getAWSCredentials,
      onfailure: () => {},
    })
  }

  render() {
    return <div id="googleSignIn"></div>
  }
}

export default GoogleSignInButton
