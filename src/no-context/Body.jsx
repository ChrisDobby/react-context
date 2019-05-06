import React from "react";
import PropTypes from "prop-types";
import Logo from "../Logo";

const Body = props => (
    <div className="app-body">
        <Logo logoBackground={props.selectedTheme.logoBackground} />
    </div>
);

Body.propTypes = {
    selectedTheme: PropTypes.shape({ logoBackground: PropTypes.string }),
};

export default Body;
