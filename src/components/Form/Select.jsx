import React from "react";
import { arrayOf, number, shape, string, bool, func } from "prop-types";

function Select({ name, items, selectedItem, onChange }) {
  const handleUpdate = (e) => {
    const { value } = e.target;

    onChange(value);
  };

  return (
    <div>
      <select name={name} value={selectedItem} onChange={handleUpdate}>
        {items.map((item) => {
          const { id, value, name } = item;
          return (
            <option key={id} value={value}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  items: arrayOf(
    shape({
      id: number.isRequired,
      value: string.isRequired,
      selected: bool,
      name: string.isRequired,
    })
  ).isRequired,
  selectedItem: string.isRequired,
  onChange: func.isRequired,
};

export { Select };
