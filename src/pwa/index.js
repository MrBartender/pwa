import React, { Component } from 'react'

// GraphQL
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import awsmobile from '../aws-exports'
import { withAuthenticator } from 'aws-amplify-react'
import { getUserByUsername, createUser } from './graphql'

// Components
import CreateUserDetails from '../CreateUserDetails'
import Navigation from '../Navigation'

// App-wide styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'
import './style.css'

// Initialize the backend framework
Amplify.configure(awsmobile)

class Pwa extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.createUser = this.createUser.bind(this)
    this.signOut = this.signOut.bind(this)
    this.signIn = this.signIn.bind(this)
    this.getUser()
  }

  componentDidMount() {
    const ga =
      window.gapi && window.gapi.auth2
        ? window.gapi.auth2.getAuthInstance()
        : null
    if (!ga) this.createScript()
  }

  signIn() {
    const ga = window.gapi.auth2.getAuthInstance()
    ga.signIn().then(
      googleUser => {
        this.getAWSCredentials(googleUser)
      },
      error => {
        console.log(error)
      }
    )
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

  createScript() {
    // load the Google SDK
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.async = true
    script.onload = () => {
      // init the Google SDK client
      const g = window.gapi
      g.load('auth2', () => {
        g.auth2.init({
          client_id:
            '167223859798-utaf2kgse8chgj6qldv85ddml63net4k.apps.googleusercontent.com',
          // authorized scopes
          scope: 'profile email openid',
        })
      })
    }
    document.body.appendChild(script)
  }

  getUser = async () => {
    API.graphql(
      graphqlOperation(getUserByUsername, {
        filter: { username: { eq: this.props.authData.username } },
      })
    )
      .then(response => {
        const users = response.data.searchUsers.items
        this.setState({
          user: users[0] ? users[0] : null,
        })
      })
      .catch(errors => {
        this.setState({
          user: null,
        })
      })
  }

  createUser = async name => {
    const response = await API.graphql(
      graphqlOperation(createUser, {
        input: {
          name,
          types: [`CUSTOMER`],
          username: this.props.authData.username,
        },
      })
    )

    this.setState({
      user: response.data.createUser,
    })
  }

  signOut = async event => {
    return await Auth.signOut()
  }

  render() {
    // Don't render anything while still loading the user
    if (this.state.user === undefined) {
      return null
    }

    // if user has not been created, prompt them to finish it
    if (this.state.user === null) {
      return (
        <div style={{ padding: '1rem 3rem' }}>
          <CreateUserDetails onCompleted={this.createUser} />
        </div>
      )
    }

    // User is fully logged in
    return <Navigation user={this.state.user} signOut={this.signOut} />
  }
}

export default withAuthenticator(Pwa, {
  includeGreetings: false,
})
