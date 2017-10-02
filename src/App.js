import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentA from './ComponentA';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <ComponentA />
      </div>
    );
  }
}

export default App;
