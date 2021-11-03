import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from './components/Button.js'

class App extends Component {
  render() {
    return (
      <div className="d-flex">
        <Button text="add"/>
        <Button text="list" />
        <Button text="pay"/>
      </div>
    );
  }
}

export default App;
