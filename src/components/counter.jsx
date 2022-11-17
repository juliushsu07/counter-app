import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() { 
        return ( 
            <React.Fragment>
                <img src={this.state.imageURL}/>
                <span style ={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn btn-secondary">Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;