import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      shouldShow: !prevState.shouldShow,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        {this.state.shouldShow && <p>Hello world!</p>}
      </div>
    );
  }
}

export { Button };
