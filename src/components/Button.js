import React, { Component } from 'react';

class Button extends Component {
    render() {
        // console.log(this.props);
        return (
            <div className="p-2">
                <button 
                    type="button" 
                    onClick= {() => {this.props.handleClick(this.props.text)}}
                    className="btn btn-outline-primary" 
                    >
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;