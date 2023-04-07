import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  decreamentCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <div
          style={{
            border: "1px solid black",
            background: "white",
            color: "black",
            height: "50px",
            width: "100px",
            marginLeft: "50px",
            textAlign: "center",
          }}
        >
          {this.state.count}
        </div>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
          style={{ margin: "20px", height: "40px", background: "green" }}
        >
          Increament
        </button>
        <button
          onClick={this.decreamentCounter}
          style={{ background: "red", height: "40px" }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
