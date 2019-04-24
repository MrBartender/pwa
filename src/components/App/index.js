import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

// App-wide styles
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './style.css';

// Initialize the backend framework
Amplify.configure(awsmobile)

class App extends Component {
  componentDidMount() {
    console.log('App loaded')
  }

  render() {
    return (
      <h1>Welcome!</h1>
    );
  }
}

export default withAuthenticator(App, true);
