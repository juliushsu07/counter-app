import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    }

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? <h1>Zero</h1> : value;
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1})
    }

    render() { 
        return ( 
            <div>
                {this.props.children}
                <span style ={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement()} className="btn btn btn-secondary">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id) } 
                className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        )
    }  
}
 
export default Counter;