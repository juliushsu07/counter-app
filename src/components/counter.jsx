import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        // console.log("Increment Clicked", this);
        this.setState({ count: this.state.count + 1})
    }
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() { 
        return ( 
            <React.Fragment>
                <span style ={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn btn-secondary">Increment</button>
                <div>
                    {this.state.tags.length === 0 && "Please create a new tag!"}
                    {this.renderTags()};
                </div>
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