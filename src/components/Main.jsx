import React from "react";
import axios from "axios";

import { BASE_URL } from "../api/api";

import { Button } from "./Button.js";
import { Form } from "./Form/Form";
import { List } from "./List/List.js";
import { Title } from "./Title/Title";

/**
 * GET -
 * POST -
 * DELETE -
 */

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
      loading: false,
    };
  }

  componentDidMount() {
    // const values = JSON.parse(localStorage.getItem("values"));
    this.getFormValues();
  }

  componentDidUpdate(_, prevState) {
    console.log("prevState", this.state);
    // if (prevState.loading !== this.state.loading) {
    //   this.getFormValues();
    // }
  }

  componentWillUnmount() {
    // localStorage.removeItem("values");
  }

  getFormValues = () => {
    axios
      .get(`${BASE_URL}/users`)
      .then((response) => {
        console.log("response.data", response.data);
        this.setState({ values: response.data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  sendForm = (values) => {
    axios
      .post(`${BASE_URL}/users`, values)
      .then((response) => {
        this.setState((prev) => ({ values: [...prev.values, response.data] }));
        // localStorage.setItem("values", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  deleteItem = (id) => {
    this.setState({ loading: true });
    axios
      .delete(`${BASE_URL}/users/${id}`)
      .then(() => {
        this.setState((prev) => ({
          values: prev.values.filter((item) => item.id !== id),
        }));
      })
      .catch(function (error) {
        console.log("error", error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
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
