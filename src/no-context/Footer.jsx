import React from "react";
import PropTypes from "prop-types";

const Footer = props => (
    <footer className="app-footer">
        <span>{props.selectedTheme.name}</span>
    </footer>
);

Footer.propTypes = {
    selectedTheme: PropTypes.shape({ name: PropTypes.string }),
};

export default Footer;
