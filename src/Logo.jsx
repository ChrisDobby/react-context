import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";

const Logo = props => (
    <img src={logo} className="app-logo" alt="logo" style={{ backgroundColor: props.logoBackground }} />
);

Logo.propTypes = {
    logoBackground: PropTypes.string.isRequired,
};

export default Logo;
