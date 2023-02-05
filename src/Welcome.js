import React from "react";

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
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}
