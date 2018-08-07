import React, { Component } from "react";
import Checkbox from "../checkbox";

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

  onCheck1(e, checked) {
    this.setState({ checked1: checked });
  }

  onCheck2(e, checked) {
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
      <div>
        <div style={{ display: "flex", marginBottom: 20 }}>
          <Checkbox checked={this.isAllChecked} onCheck={this.onAllCheck}>
            Выбрать все
          </Checkbox>
          {["default"].map(variation => (
            <div style={{ maxWidth: 320, marginRight: 20 }} key={variation}>
              <h4>variation: {variation}</h4>
              <div style={{ marginTop: 20 }}>
                <Checkbox
                  checked={this.state.checked1}
                  onCheck={this.onCheck1}
                  theme={variation}
                >
                  Получать уведомления по почте
                </Checkbox>
              </div>
              <div style={{ marginTop: 20 }}>
                <Checkbox
                  checked={this.state.checked2}
                  onCheck={this.onCheck2}
                  theme={variation}
                >
                  Получать уведомления на мобильный
                </Checkbox>
              </div>
              <div style={{ marginTop: 20 }}>
                <Checkbox
                  checked={this.state.checked1}
                  disabled
                  theme={variation}
                  onCheck={() => {}}
                >
                  Получать уведомления по почте
                </Checkbox>
              </div>
              <div style={{ marginTop: 20 }}>
                <Checkbox
                  checked={this.state.checked2}
                  onCheck={this.onCheck2}
                  theme={variation}
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
      </div>
    );
  }
}
