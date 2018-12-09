import React from "react";

class Greeting extends React.Component {
  state = {
    name: "World",
    surname: "Wide"
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSurnameChange = event => {
    this.setState({ surname: event.target.value });
  };

  render() {
    return (
      <form>
        <h2>
          Hello {this.state.name} {this.state.surname}
        </h2>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleNameChange} />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="surname"
            onChange={this.handleSurnameChange}
          />
        </label>
      </form>
    );
  }
}

export default Greeting;
