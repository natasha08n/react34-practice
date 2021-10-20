import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { addUser } from "../../api/users";
import { Form } from "../Form/Form";

function UsersForm() {
  const history = useHistory();

  const sendForm = async (values) => {
    await addUser(values);
    history.push("/users");
  };

  return (
    <>
      <p>UsersForm Page</p>
      <Form handleSubmit={sendForm} />
      <br />
      <Link to="/users">Go to Users page</Link>
    </>
  );
}

export { UsersForm };
