import React, { Component } from 'react';
import './App.css';

import Facebook from './components/facebook';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src='facebooklogo.png' className="App-logo" alt="logo" />

        <h1 className="App-title">Facebook Authentification</h1>

        <a className="App-link" >
          To get Started, You Need to Authenticate with Facebook.
        </a>
        <Facebook/>
      </header>
      
    </div>
  );
}

export default App;
