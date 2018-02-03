import React, { Component } from 'react';
import logo from './logo.svg';
import RootContainer from './containers/RootContainer'
import Bulma from '../node_modules/bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <RootContainer />
      </div>
    );
  }
}

export default App;
