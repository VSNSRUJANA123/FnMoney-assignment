import React, { Component } from "react";

class AssessmentForm extends Component {
  state = { task: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Assessment Task"
          onChange={this.handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AssessmentForm;
