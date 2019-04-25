import React, { Component } from 'react';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { getUserByUsername, createUser } from './graphql';
import CreateUserDetails from '../CreateUserDetails';

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
    const cognitoUser = await Auth.currentAuthenticatedUser()
    const response = await API.graphql(graphqlOperation(getUserByUsername, { username: cognitoUser.username }))
    this.setState({
      user: response.data.getUserByUsername
    })
  }

  createUser = async (name) => {
    const cognitoUser = await Auth.currentAuthenticatedUser()
    const response = await API.graphql(graphqlOperation(createUser, { input: { name, username: cognitoUser.username } }))
    this.setState({
      user: response.data.createUser
    })
  }

  render() {
    console.log(this.state.user)
    // Don't render anything while still loading the user
    if (this.state.user === undefined) {
      return null;
    }

    // if user has not been created, prompt them to finish it
    if (this.state.user === null) {
      return <CreateUserDetails onCompleted={this.createUser} />;
    }
    
    // User is fully logged in
    return (
      <h1>Welcome, { this.state.user.name }!</h1>
    );
  }
}

export default withAuthenticator(App, true);
