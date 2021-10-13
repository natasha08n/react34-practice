import { Component } from "react";

import { Select } from "./Select";
import { gender } from "../../constants/gender";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      gender: "male",
    };
  }

  handleUpdate = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput
          placeholder="Enter name..."
          name="name"
          value={this.state.name}
          onChange={this.handleUpdate}
        />
        <FormInput
          placeholder="Enter surname..."
          name="surname"
          value={this.state.surname}
          onChange={this.handleUpdate}
        />
        <Select
          items={gender}
          selectedItem={this.state.gender}
          onChange={this.handleUpdate}
        />
        <br />
        <button type="submit">Submit Form</button>
      </form>
    );
  }
}

class FormInput extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export { Form };
