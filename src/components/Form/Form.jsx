import { useState } from "react";

import { Select } from "./Select";
import { gender as genderValues } from "../../constants/gender";

function Form(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("male");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit({ name, surname, gender });
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setSurname("");
    setGender("male");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        placeholder="Enter name..."
        name="name"
        value={name}
        onChange={setName}
      />
      <FormInput
        placeholder="Enter surname..."
        name="surname"
        value={surname}
        onChange={setSurname}
      />
      <Select
        name="gender"
        items={genderValues}
        selectedItem={gender}
        onChange={setGender}
      />
      <br />
      <button type="submit">Submit Form</button>
    </form>
  );
}

function FormInput({ name, placeholder, value, onChange }) {
  const handleUpdate = (e) => {
    const { value } = e.target;

    onChange(value);
  };

  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleUpdate}
      />
    </div>
  );
}

export { Form };
