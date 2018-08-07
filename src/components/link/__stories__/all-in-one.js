import React, { Component } from "react";
import { action } from "@storybook/addon-actions";
import { Link } from "../../../components";

export class LinkAllInOneExample extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3>ALl links type</h3>
        <div style={{ display: "flex" }}>
          {Link.Themes.map(theme => (
            <div style={{ width: 300, marginRight: 40 }} key={theme}>
              <h4>Theme: {theme}</h4>
              {Link.Types.map(type => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                  key={type}
                >
                  <h5> Type: {type} </h5>
                  <Link
                    type={type}
                    target="_self"
                    href="#"
                    theme={theme}
                    onClick={action("clicked")}
                  >
                    Some text
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
