import React from "react";
import PropTypes from "prop-types";
import themeContext from "./context/themeContext";

const ThemeItem = props => {
    const { selectedTheme, selectTheme } = React.useContext(themeContext);
    return (
        <button style={{ color: selectedTheme.linkColor }} onClick={() => selectTheme(props.themeName)}>
            {props.themeName}
        </button>
    );
};

ThemeItem.propTypes = {
    themeName: PropTypes.string.isRequired,
};

export default ThemeItem;
