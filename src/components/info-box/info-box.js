import React, { Fragment } from "react";
import PropTypes from "prop-types";
import StyledInfoBox from "./info-box.styled";

export default class InfoBox extends StyledInfoBox {
  static propTypes = {
    /** flag for enable closing info-box */
    closeButton: PropTypes.bool,
    /** Text for action button */
    actionText: PropTypes.string,
    /** Action button props */
    actionProps: PropTypes.shape({
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      icon: PropTypes.string,
      iconSize: PropTypes.string,
      loading: PropTypes.bool,
      type: PropTypes.string,
      href: PropTypes.string,
      target: PropTypes.string,
    }),
    /** flag need for animations and hide inf-box by default */
    show: PropTypes.bool,
    /** type of visualisation */
    variation: PropTypes.oneOf(["info", "warn", "error"]),
    /** info-box title */
    header: PropTypes.string.isRequired,
    /** Info bar content my be string react or html elements */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
  };

  static defaultProps = {
    closeButton: false,
    show: true,
  };

  _onCloseInfoBox = () => {
    this.setState({ show: false });
  };

  componentWillMount() {
    const { show } = this.props;
    this.setState({ show });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const { show } = nextProps;
    if (this.props.show !== show) {
      this.setState({ show });
    }
  }

  constructor() {
    super();
  }

  render() {
    const {
      closeButton,
      actionText,
      actionProps,
      header,
      children,
      ...rest
    } = this.props;

    return (
      <Fragment>
        {this.state.show && (
          <InfoBox.Container {...rest}>
            <InfoBox.Text>
              <InfoBox.Header>{header}</InfoBox.Header>
              <InfoBox.Body>{children}</InfoBox.Body>
            </InfoBox.Text>
            {actionText && (
              <InfoBox.Actions>
                <InfoBox.ActionButton
                  variation="success"
                  size="big"
                  {...actionProps}
                >
                  {actionText}
                </InfoBox.ActionButton>
              </InfoBox.Actions>
            )}
            {closeButton && (
              <InfoBox.CloseButton onClick={this._onCloseInfoBox}>
                <InfoBox.Cross glyph="cross" size="small" />
              </InfoBox.CloseButton>
            )}
          </InfoBox.Container>
        )}
      </Fragment>
    );
  }
}
