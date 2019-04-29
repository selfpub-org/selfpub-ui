import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, size, color, className }) => (
  <svg className={className} fill={color} height={size} width={size}>
    <use xlinkHref={`#${name}`} />
  </svg>
);

Icon.displayName = "Icon";

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: "",
  color: "#000",
  size: 24,
};

export default Icon;
