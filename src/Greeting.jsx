import React from "react";

class Greeting extends React.Component {
  state = { name: "" };

  render() {
    return (
      <form>
        <h2>Hello {this.props.name}</h2>
        <input type="text" name="name" />
      </form>
    );
  }
}

export default Greeting;
