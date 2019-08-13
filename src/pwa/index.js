import React, { Component } from 'react'

// GraphQL
import Amplify, { Auth } from 'aws-amplify'
import awsmobile from '../aws-exports'
// import { withAuthenticator } from 'aws-amplify-react'
// import { getUserByUsername, createUser } from './graphql'
import GoogleSignInButton from '../components/GoogleSignInButton'

// Components
// import CreateUserDetails from '../CreateUserDetails'
// import Navigation from '../Navigation'

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
    this.signOut = this.signOut.bind(this)
  }

  signOut = async event => {
    return await Auth.signOut()
  }

  render() {
    // if user has not been created, prompt them to finish it
    // if (this.state.user === null) {
    //   return (
    //     <div style={{ padding: '1rem 3rem' }}>
    //       <CreateUserDetails onCompleted={this.createUser} />
    //     </div>
    //   )
    // }

    // User is fully logged in
    // return <Navigation user={this.state.user} signOut={this.signOut} />
    return (
      <div className="centered">
        <h1 style={{ color: 'white' }}>Log In</h1>
        <GoogleSignInButton />
      </div>
    )
  }
}

export default Pwa
