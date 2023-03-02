import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { name } = this.props;

    return <div>{name}</div>;
  }
}

export default Profile;
