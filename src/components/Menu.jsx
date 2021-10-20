import React from "react";
import { NavLink } from "react-router-dom";

import { usePage } from "../hooks/usePage";

function Menu() {
  usePage();

  return (
    <>
      <NavLink
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Users
      </NavLink>
      <NavLink
        to="/users-form"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Users Form
      </NavLink>
    </>
  );
}

export { Menu };
