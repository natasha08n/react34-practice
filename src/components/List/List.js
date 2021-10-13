import { Component } from "react";

import { ListItem } from "../ListItem.js";
import "./List.css";

class List extends Component {
  render() {
    const { items, deleteItem } = this.props;

    return (
      <div className="container">
        {items.map((item, index) => (
          <ListItem
            key={index}
            id={item.id}
            name={item.name}
            surname={item.surname}
            gender={item.gender}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    );
  }
}

export { List };

/**
 * this.setState({
 *  [target.textContent]: prevState[target.textContent] + 1
 * })
 * /

/**
 * const obj = {
 *  id: 1,
 *  name: "Nataly"
 * }
 * 
 * obj.id
 * obj["id"]
 */
