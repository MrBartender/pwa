import React, { Component } from 'react'

// Backend Integrations
import { Auth, Hub } from 'aws-amplify'

// Pages and Clients that could get rendered
import SignIn from './pages/SignIn'
import ProfileSelect from './pages/ProfileSelect'
import Host from '../clients/Host'
import Consumer from '../clients/Consumer'

// Redux Store
import { Provider } from 'react-redux'
import configureStore from './store'

// App-wide styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import './style.css'

const store = configureStore()

class Core extends Component {
  state = { user: null, profile: null }

  componentDidMount() {
    // Ensure state starts accurately
    Auth.currentAuthenticatedUser()
      .then(user => this.setState({ user }))
      .catch(() => this.setState({ user: null }))

    // Auto-detect changes in auth state via Hub pubsub service
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
  }

  render() {
    const { user, profile } = this.state

    // Verify Logged In Via Google
    if (!user) {
      return <SignIn />
    }

    // Select Profile to Use (Determines Client to Use)
    if (!profile) {
      return (
        <ProfileSelect selectProfile={profile => this.setState({ profile })} />
      )
    }

    // Launch Host Client
    if (profile === 'host') {
      return (
        <Provider store={store}>
          <Host user={user} />
        </Provider>
      )
    }

    // Launch Consumer Client
    if (profile === 'consumer') {
      return (
        <Provider store={store}>
          <Consumer user={user} />
        </Provider>
      )
    }

    return null
  }
}

export default Core
