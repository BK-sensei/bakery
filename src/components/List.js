import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
                <h1>List</h1>
                <ul className="list-group">
                    {this.props.items.map(item)}
                </ul>
            </div>
        );
    }
}

export default List;