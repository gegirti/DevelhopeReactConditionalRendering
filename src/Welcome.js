import React from "react";

export class Welcome extends React.Component {
  static defaultProps = {
    name: "fellow human being",
    // age: 1,
  };
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        {this.props.age && <p>Your age is {this.props.age}</p>}
      </div>
    );
  }
}
