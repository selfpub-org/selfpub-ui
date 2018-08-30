import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import StyledRadio from "./radio.styled";

export default class Radio extends StyledRadio {
  static propTypes = {
    /** Checked state flag */
    checked: PropTypes.bool,
    /** Radio disable flag */
    disabled: PropTypes.bool,
    /** Radio Position */
    iconPosition: PropTypes.oneOf(["left", "right"]),
    /** Radio input ID */
    id: PropTypes.string,
    /** Radio name */
    name: PropTypes.string,
    /** Theme of Radio */
    variation: PropTypes.oneOf(["green"]),
    /** callback for event change checked state for Radio */
    onCheck: PropTypes.func.isRequired,
  };

  static defaultProps = {
    checked: false,
    disabled: false,
    iconPosition: "left",
    id: "",
    name: "radio",
    variation: "green",
  };

  state = {
    checked: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { checked } = this.props;

    this.setState({ checked });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked,
      });

      this.input.checked = nextProps.checked;
    }
  }

  handleChange = event => {
    const { onCheck, disabled, name, value } = this.props;
    const { checked } = this.props;

    if (disabled) {
      return;
    }

    this.setState(
      { checked },
      onCheck({
        name,
        value,
        checked,
        target: this.input,
        event,
      }),
    );
  };

  render() {
    const { id, name, disabled, iconPosition, children, ...rest } = this.props;

    const { checked } = this.state;
    const radioId = id || `radio-${nanoid(6)}`;

    const content = <Fragment>{children && <span>{children}</span>}</Fragment>;

    const marker = (
      <Fragment>
        <Radio.Input
          id={radioId}
          name={name}
          ref={input => {
            this.input = input;
          }}
          autoComplete="off"
          tabIndex="-1"
          type="radio"
          value={this.props.value}
          onChange={this.handleChange}
          checked={checked}
          disabled={this.props.disabled}
        />
        <Radio.FakeRadio checked={this.state.checked} {...rest} />
      </Fragment>
    );

    return (
      <Radio.Label {...rest} htmlFor={radioId} disabled={disabled}>
        {iconPosition === "left" && marker}
        {content}
        {iconPosition === "right" && marker}
      </Radio.Label>
    );
  }
}
