import React from "react";
import PropTypes from "prop-types";

const ThemeItem = props => (
    <button style={{ color: props.selectedTheme.linkColor }} onClick={props.select}>
        {props.themeName}
    </button>
);

ThemeItem.propTypes = {
    selectedTheme: PropTypes.shape({ linkColor: PropTypes.string }).isRequired,
    themeName: PropTypes.string.isRequired,
    select: PropTypes.func.isRequired,
};

export default ThemeItem;
