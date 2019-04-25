import React, { Component } from 'react';

// GraphQL
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { getUserByUsername, createUser } from './graphql';

// Components
import CreateUserDetails from '../CreateUserDetails';
import Navigation from '../Navigation';
import Discover from '../Discover';
import { SignOut } from 'aws-amplify-react/dist/Auth';

// App-wide styles
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './style.css';

// Initialize the backend framework
Amplify.configure(awsmobile)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.createUser = this.createUser.bind(this)
    this.getUser()
  }

  getUser = async () => {
    const response = await API.graphql(graphqlOperation(getUserByUsername, { input: { username: this.props.authData.username } }))
    this.setState({
      user: response.data.getUserByUsername
    })
  }

  createUser = async (name) => {
    const response = await API.graphql(graphqlOperation(createUser, { input: { name, username: this.props.authData.username } }))
    this.setState({
      user: response.data.createUser
    })
  }

  render() {
    console.log(this.state.user)
    // Don't render anything while still loading the user
    if (this.state.user === undefined) {
      return null
    }

    // if user has not been created, prompt them to finish it
    if (this.state.user === null) {
      return <CreateUserDetails onCompleted={this.createUser} />
    }
    
    // User is fully logged in
    return (
      <div>
        <Navigation user={this.state.user} signOutButton={SignOut} />
        <Discover user={this.state.user} />
      </div>
    );
  }
}

export default withAuthenticator(App, {
  includeGreetings: false
});
