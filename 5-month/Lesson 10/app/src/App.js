import { Component } from "react";
import Profile from "./Profile";

class App extends Component {
  static defaultProps = {
    user: "Userbek",
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "Ibrohim",
    };
  }


  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name} {this.props.user}
        </h1>
        <button
          onClick={() => this.setState({ name: this.state.name + "bek" })}
        >
          Set state
        </button>
        <Profile name={this.state.name} />
      </div>
    );
  }
}

export default App;
