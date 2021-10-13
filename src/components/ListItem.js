import { Component } from "react";

class ListItem extends Component {
  handleDelete = () => {
    const { id, deleteItem } = this.props;

    deleteItem(id);
  };

  render() {
    const { name, surname, gender } = this.props;

    return (
      <div>
        <span>
          {name} {surname} -{" "}
          {gender === "female" ? "👧 " : gender === "male" ? "👦 " : "👻 "}
        </span>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export { ListItem };
