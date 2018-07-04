import React, { Component } from "react";


class Counter extends Component {

  render() {
    console.log("render fired");
    return (
      <span className="count">
       {this.props.counter}
      </span>
    );
  }
}

export default Counter;