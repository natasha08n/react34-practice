import React from "react";
import { arrayOf, number, shape, string, bool, func } from "prop-types";

class Select extends React.Component {
  render() {
    const { items, selectedItem, onChange } = this.props;

    return (
      <div>
        <select name="gender" value={selectedItem} onChange={onChange}>
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
