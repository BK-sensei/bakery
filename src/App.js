import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from './components/Button.js'
import Add from './components/Add.js';
import List from './components/List.js';
import Pay from './components/Pay.js';

class App extends Component {
  constructor(){
    super()

    // state inital
    this.state = {
      activeTab: "Add",
      items: []
    }

    // Bind
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  // Méthodes (fonctions)
  handleButtonClick(str){
    this.setState({activeTab: str})
  }

  addItem(name, price){
    const newItem = {
      name: name,
      price: price
    }
    this.setState({items: [...this.state.items, newItem]})
  }

  render() {
    return (
      
      <div className="container">
        <div className="d-flex">
        <Button 
          text="Add" 
          handleClick={this.handleButtonClick}
          isSelected={this.state.activeTab === "Add"}
        />

        <Button 
          text="List" 
          handleClick={this.handleButtonClick}
          isSelected={this.state.activeTab === "List"}
        />

        <Button 
          text="Pay" 
          handleClick={this.handleButtonClick}
          isSelected={this.state.activeTab === "Pay"}
        />
        </div>

        {activeTab === "Add" && <Add addItem={this.addItem}/>}
        {activeTab === "List" && <List  />}
        {activeTab === "Pay" && <Pay />}
      </div>
    );
  }
}

export default App;
