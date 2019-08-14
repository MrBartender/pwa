import React, { Component } from 'react'

// Backend Integration
import Amplify, { Auth, Hub } from 'aws-amplify'
import amplifyConfig from '../aws-exports'

// Pages and Profiles that could get rendered
import SignIn from './pages/SignIn'
import ProfileSelect from './pages/ProfileSelect'
import Vendor from '../profiles/Vendor'
import Consumer from '../profiles/Consumer'

// App-wide styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import './style.css'

// Initialize the backend framework
Amplify.configure(amplifyConfig)

class Core extends Component {
  state = { user: null, profile: null }

  componentDidMount() {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          this.setState({ user: data })
          break
        case 'signOut':
          this.setState({ user: null })
          break
        default:
          break
      }
    })

    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(() => this.setState({ user: null }))
  }

  render() {
    const { user, profile } = this.state

    // Verify Logged In
    if (!user) {
      return <SignIn />
    }

    // Select Profile (Story)
    if (!profile) {
      return (
        <ProfileSelect selectProfile={profile => this.setState({ profile })} />
      )
    }

    // Vendor Story
    if (profile === 'vendor') {
      return <Vendor user={user} />
    }

    // Consumer Story
    if (profile === 'consumer') {
      return <Consumer user={user} />
    }

    return null
  }
}

export default Core
