import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageURL: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() { 
        return ( 
            <React.Fragment>
                <img src={this.state.imageURL}/>
                <span style ={this.styles} className="badge bg-primary m-2">{this.formatCount()}</span>
                <button className="btn btn btn-secondary">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;