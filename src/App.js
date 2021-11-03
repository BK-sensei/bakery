import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from './components/Button.js'

class App extends Component {
  constructor(){
    super()

    // state inital
    this.state = {
      activeTab: "add",
      items: []
    }

    // Bind
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  // Méthodes (fonctions)
  handleButtonClick(str){
    console.log(str);
  }

  render() {
    return (
      <div className="d-flex">
        <Button text="add" handleClick={this.handleButtonClick}/>
        <Button text="list" handleClick={this.handleButtonClick}/>
        <Button text="pay" handleClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default App;
