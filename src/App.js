import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    // const jsxName = <strong>John</strong>;
    return <Welcome name="John" age="19"/>;
  }
}
