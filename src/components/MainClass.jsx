import React from "react";

import { Button } from "./Button.js";
import { Form } from "./Form/Form";
import { List } from "./List/List.js";
import { Title } from "./Title/Title";
import { getUsers, addUser, deleteUser } from "../api/users";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getFormValues();
  }

  componentWillUnmount() {
    // localStorage.removeItem("values");
  }

  getFormValues = async () => {
    const values = await getUsers();
    this.setState({ values });
  };

  sendForm = async (values) => {
    const user = await addUser(values);
    this.setState((prev) => ({ values: [...prev.values, user] }));
  };

  deleteItem = async (id) => {
    this.setState({ loading: true });
    await deleteUser(id);
    this.setState((prev) => ({
      values: prev.values.filter((item) => item.id !== id),
      loading: false
    }));
  };

  render() {
    return (
      <>
        <Title value="Group 34 react app" />
        <Form handleSubmit={this.sendForm} />
        <Button />
        <List items={this.state.values} deleteItem={this.deleteItem} />
      </>
    );
  }
}

export { Main };
