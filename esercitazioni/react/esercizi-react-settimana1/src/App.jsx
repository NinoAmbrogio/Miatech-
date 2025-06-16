import { Component } from "react";

class HelloWorld extends Component {
  title = "Hello World";
  text = "ciao";

  render() {
    return (
      <>
        <h1>{this.title}</h1>
        <p>{this.text}</p>
      </>
    );
  }
}

export default HelloWorld;
