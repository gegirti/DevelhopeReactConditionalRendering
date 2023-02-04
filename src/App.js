import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    const jsxName = <strong>Taha</strong>;
    return <Welcome name={jsxName}  />;
  }
}
