import React, { Component } from "react";
import { action } from "@storybook/addon-actions";
import { Link, ThemeProviderWrapper } from "../../index";

export class LinkAllInOneExample extends Component {
  render() {
    return (
      <ThemeProviderWrapper>
        <React.Fragment>
          <div style={{ width: "100%" }}>
            <h3>ALl links type size "Inherit"</h3>
            <div style={{ display: "flex" }}>
              {Link.Variations.map(variation => (
                <div style={{ width: 300, marginRight: 40 }} key={variation}>
                  <h4>Variation: {variation}</h4>
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
                        variation={variation}
                        size={"inherit"}
                        onClick={action("clicked")}
                      >
                        Some text
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <h3>ALl links type size "Small"</h3>
            <div style={{ display: "flex" }}>
              {Link.Variations.map(variation => (
                <div style={{ width: 300, marginRight: 40 }} key={variation}>
                  <h4>Variation: {variation}</h4>
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
                        variation={variation}
                        size={"small"}
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
        </React.Fragment>
      </ThemeProviderWrapper>
    );
  }
}
