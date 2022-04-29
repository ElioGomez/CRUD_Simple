import React, { Component } from 'react';
import './App.css';
import CRUDJuegos from './CRUDJuegos';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div className="App">
        <CRUDJuegos />
      </div>
    );
  }
}

export default App;
