import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className="p-2">
                <button type="button" class="btn btn-outline-primary">{this.props.text}</button>
            </div>
        );
    }
}

export default Button;