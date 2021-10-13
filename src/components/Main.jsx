import React, { useEffect, useState } from "react";

import { Button } from "./Button.js";
import { Form } from "./Form/Form";
import { List } from "./List/List.js";
import { Title } from "./Title/Title";
import { getUsers, addUser, deleteUser } from "../api/users";
import { useFetch } from "../hooks/useFetch";

function Main() {
  const { data: values, setData: setValues, loading, error } = useFetch(getUsers);

  useEffect(() => {
    console.log("component did update", values);
  }, [values]);

  useEffect(() => {
    return () => {
      console.log("component will unmount");
      localStorage.removeItem("values");
    };
  }, []);

  const sendForm = async (values) => {
    const user = await addUser(values);
    setValues((prevValues) => [...prevValues, user]);
  };

  const deleteItem = async (id) => {
    await deleteUser(id);
    setValues((prevValues) => prevValues.filter((item) => item.id !== id));
  };

  return (
    <>
      <Title value="List" />
      <p>{loading ? 'Загрузка...' : 'Загрузилось...'}</p>
      <p>{error}</p>
      <Form handleSubmit={sendForm} />
      <Button />
      <List items={values} deleteItem={deleteItem} />
    </>
  );
}

export { Main };
