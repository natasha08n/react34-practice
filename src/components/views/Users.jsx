import React from "react";

import { List } from "../List/List";
import { getUsers, deleteUser } from "../../api/users";
import { useFetch } from "../../hooks/useFetch";

function Users() {
  const {
    data: values,
    setData: setValues,
    loading,
    error,
  } = useFetch(getUsers);

  const deleteItem = async (id) => {
    await deleteUser(id);
    setValues((prevValues) => prevValues.filter((item) => item.id !== id));
  };

  return (
    <>
      <p>Users Page</p>
      <List items={values} deleteItem={deleteItem} />
      <p>{loading && "Загрузка..."}</p>
      <p>{error}</p>
    </>
  );
}

export { Users };
