import { Component } from "react";

class ClassExample extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      title: "Wow get the result",
      msg: "Hello Welcome",
    };
  }
  componentDidMount() {
    console.log("Did Mount");
  }
  componentDidUpdate() {
    console.log("Did Update");
  }
  componentWillUnmount() {
    console.log("Will Unmount");
  }
  componentWillMount() {
    console.log("will mount");
  }
  handleTitle = () => {
    console.log("tets");
    this.setState({
      msg: this.state.title,
    });
  };
  render() {
    return (
      <div>
        {console.log("return")}
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleTitle}>Click Me</button>
      </div>
    );
  }
}

export default ClassExample;
