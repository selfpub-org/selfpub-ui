import React, { Component } from "react";
import { Header } from "@selfpub-ui";

export class HeaderExample extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>Headers</h3>
        <div>
          {[1, 2, 3, 4, 5, 6].map(level => (
            <Header level={level} key={level}>
              Header Level {level}
            </Header>
          ))}
        </div>
      </div>
    );
  }
}
