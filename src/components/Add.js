import React, { Component } from 'react';

class Add extends Component {
    constructor (){
        super()

        this.state = {
            name: "",
            price: 0
        }
    }

    handleNameChange(e){
        this.setState({name: e.target.value})
    }

    handlePriceChange(){
        this.setState({price: e.target.value})
    }

    render() {
        return (
            <>
                <h1>Add</h1>
                <label className="form-label">Name</label>
                <input className="form-control mb-4" type="text" onChange={this.handleNameChange} value={this.state.name}/>
                <label className="form-label">Price</label>
                <br/>
                <input type="range" onChange={this.handlePriceChange} min={1} max={10} value={this.state.price}/>
            </>
        );
    }
}

export default Add;