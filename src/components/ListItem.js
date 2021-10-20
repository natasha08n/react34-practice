import { Component } from "react";

import { Link } from "react-router-dom";

class ListItem extends Component {
  handleDelete = () => {
    const { id, deleteItem } = this.props;

    deleteItem(id);
  };

  render() {
    const { name, surname, gender, id } = this.props;

    return (
      <div>
        <Link to={`/users/${id}`}>
          {name} {surname}
        </Link>
        <span>
          {" "}
          - {gender === "female" ? "👧 " : gender === "male" ? "👦 " : "👻 "}
        </span>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export { ListItem };
