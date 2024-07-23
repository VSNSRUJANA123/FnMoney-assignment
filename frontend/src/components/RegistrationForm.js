import React, { Component } from "react";
import axios from "axios";

class RegistrationForm extends Component {
  state = { username: "", password: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        { username, password }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
