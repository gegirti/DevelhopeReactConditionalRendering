import React from "react";

class Age extends React.Component {
  render() {
    return <p>Your age is {this.props.age}</p>;
  }
}

export class Welcome extends React.Component {
  static defaultProps = {
    name: "fellow human being",
    age: 1,
  };
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}!</p>
        <Age age="14" />
      </div>
    );
  }
}
