import React, { Component } from "react";

export class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "primary" : "warning";
    return classes;
  }

  formatCounter() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps", prevProps);
    console.log("PrevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //can use ajax call
      console.log("value changed");
    }
  }
  componentWillUnmount() {
    console.log("component-unmount", this.props.counter);
  }
  // constructor() {
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // renderClass()
  // {
  //     if(this.state.tags.length === 0) return <p>Empty Tags</p>;
  //     return <ul>
  //                 {this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}
  //             </ul>;
  // }
  render() {
    console.log("counter rendered");
    //obhect descrtuturing
    const { onIncrement, counter, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => {
              onIncrement(counter);
            }}
            className="btn btn-success btn"
          >
            +
          </button>
          <button
            onClick={() => {
              onDecrement(counter);
            }}
            className="btn btn-success btn m-2"
            disabled = {this.props.counter.value <= 0}
          >
            -
          </button>
          <button
            className="btn btn-danger btn"
            onClick={() => {
              this.props.onDelete(this.props.counter.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
