import React, { Component } from 'react';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { getUser } from './graphql';

// App-wide styles
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './style.css';

// Initialize the backend framework
Amplify.configure(awsmobile)

class App extends Component {
  getUser = async () => {
    const cognitoUser = await Auth.currentAuthenticatedUser()
    const dbUser = await API.graphql(graphqlOperation(getUser, { username: cognitoUser.username }))
    console.log('user:', dbUser)
  }
  
  componentDidMount() {
    console.log('App loaded')
    this.getUser()
  }

  render() {
    return (
      <h1>Welcome!</h1>
    );
  }
}

export default withAuthenticator(App, true);
