import React from "react";
import { useParams } from "react-router-dom";

import { getUser } from "../../api/users";
import { useFetch } from "../../hooks/useFetch";
import { ListItem } from "../ListItem";

function User() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(getUser, id);

  return (
    <>
      <p>User Page</p>
      <ListItem
        id={data.id}
        name={data.name}
        surname={data.surname}
        gender={data.gender}
      />
      <p>{loading && "Загрузка..."}</p>
      <p>{error}</p>
    </>
  );
}

export { User };
