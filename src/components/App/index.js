import React, { Component } from 'react';
<<<<<<< HEAD
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
=======
import logo from '../../media/logo.svg';
>>>>>>> 01c2a9394c64a4d892a31cf7d0e415659e316152

// App-wide styles
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './style.css';

<<<<<<< HEAD
// Initialize the backend framework
Amplify.configure(awsmobile)

class App extends Component {
  componentDidMount() {
    console.log('App loaded')
  }

  render() {
    return (
      <h1>Welcome!</h1>
=======

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
>>>>>>> 01c2a9394c64a4d892a31cf7d0e415659e316152
    );
  }
}

<<<<<<< HEAD
export default withAuthenticator(App, true);
=======
export default App;
>>>>>>> 01c2a9394c64a4d892a31cf7d0e415659e316152
