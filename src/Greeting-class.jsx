import React from "react";

class Greeting extends React.Component {
  state = {
    name: "user"
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form>
        <h2>Hello {this.state.name}</h2>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default Greeting;
