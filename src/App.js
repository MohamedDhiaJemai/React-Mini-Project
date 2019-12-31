import React, { Component } from 'react';
import './App.css';

import Facebook from './components/facebook';
import ListShows from './components/ListShows';

class App extends React.Component
{
  test()
  {
    
  }
  render()
  {
    return(
      <div className="App">
      <header className="App-header">

        <img src='facebooklogo.png' className="App-logo" alt="logo" />

        <h1 className="App-title">Facebook Authentification</h1>

        <a className="App-link" >
          To get Started, You Need to Authenticate with Facebook.
        </a>
        
      </header>
      <Facebook/>
    </div>
    
    )
  }
}

export default App;