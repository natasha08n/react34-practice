import axios from "axios";

import { BASE_URL } from "./constants";

export const getUsers = () => {
  return axios
    .get(`${BASE_URL}/users`)
    .then((response) => response.data)
    .catch((error) => error);
};

export const addUser = (values) => {
  return axios
    .post(`${BASE_URL}/users`, values)
    .then((response) => response.data)
    .catch((error) => error);
};

export const deleteUser = (id) => {
  return axios.delete(`${BASE_URL}/users/${id}`).then(() => id);
};
