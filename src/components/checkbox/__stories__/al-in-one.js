import React, { Component } from "react";

import { Checkbox, ThemeProviderWrapper } from "@selfpub-ui";

export default class CheckboxAllInOneExample extends Component {
  constructor() {
    super();
    this.state = {
      checked1: true,
      checked2: false,
    };
    this.onCheck1 = ::this.onCheck1;
    this.onCheck2 = ::this.onCheck2;
    this.onAllCheck = ::this.onAllCheck;
  }
  get isAllChecked() {
    if (this.state.checked1 === true && this.state.checked2 === true)
      return true;
    if (this.state.checked1 === false && this.state.checked2 === false)
      return false;
    return undefined;
  }

  onCheck1({ event, target: { checked } }) {
    this.setState({ checked1: checked });
  }

  onCheck2({ event, target: { checked } }) {
    this.setState({ checked2: checked });
  }

  onAllCheck() {
    const checked = this.isAllChecked === false;
    this.setState({
      checked1: checked,
      checked2: checked,
    });
  }

  render() {
    return (
      <ThemeProviderWrapper>
        <React.Fragment>
          <div style={{ display: "flex", marginBottom: 20 }}>
            <Checkbox checked={this.isAllChecked} onCheck={this.onAllCheck}>
              Выбрать все
            </Checkbox>
            {["green"].map(variation => (
              <div style={{ maxWidth: 320, marginRight: 20 }} key={variation}>
                <h4>variation: {variation}</h4>
                <div style={{ marginTop: 20 }}>
                  <Checkbox
                    checked={this.state.checked1}
                    onCheck={this.onCheck1}
                    variation={variation}
                  >
                    Получать уведомления по почте
                  </Checkbox>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Checkbox
                    checked={this.state.checked2}
                    onCheck={this.onCheck2}
                    variation={variation}
                  >
                    Получать уведомления на мобильный
                  </Checkbox>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Checkbox
                    checked={true}
                    disabled
                    variation={variation}
                    onCheck={() => {}}
                  >
                    Получать уведомления по почте
                  </Checkbox>
                </div>
                <div style={{ marginTop: 20 }}>
                  <Checkbox
                    checked={this.state.checked2}
                    onCheck={this.onCheck2}
                    variation={variation}
                    iconPosition="right"
                  >
                    Получать уведомления на мобильный
                  </Checkbox>
                </div>
              </div>
            ))}
          </div>
          <div>
            this.state.checked1: <b>{`${this.state.checked1}`}</b>
          </div>
          <div>
            this.state.checked2: <b>{`${this.state.checked2}`}</b>
          </div>
        </React.Fragment>
      </ThemeProviderWrapper>
    );
  }
}
