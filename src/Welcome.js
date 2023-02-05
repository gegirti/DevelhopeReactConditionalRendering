import React from "react";

class Age extends React.Component {
  render() {
    return (
      <div>
        {" "}
        {this.props.age > 18 ? (
          <p>Your age is {this.props.age}</p>
        ) : (
          <p>You are very young!</p>
        )}
      </div>
    );
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
        {this.props.age > 18 &&
        this.props.age < 65 &&
        this.props.name === "John" ? (
          <p>Welcome {this.props.name}!</p>
        ) : (
          ""
        )}
        <Age age="19" />
      </div>
    );
  }
}
