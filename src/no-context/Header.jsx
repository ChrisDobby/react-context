import React from "react";
import PropTypes from "prop-types";
import ThemeItem from "./ThemeItem";

const Header = props => (
    <header
        className="app-header"
        style={{ backgroundColor: props.selectedTheme.backgroundColor, color: props.selectedTheme.color }}
    >
        <span>{`Current theme: ${props.selectedTheme.name}`}</span>
        <div className="app-menu">
            {props.availableThemes.map(theme => (
                <ThemeItem
                    key={theme}
                    selectedTheme={props.selectedTheme}
                    themeName={theme}
                    select={() => props.selectTheme(theme)}
                />
            ))}
        </div>
    </header>
);

Header.propTypes = {
    selectedTheme: PropTypes.shape({
        name: PropTypes.string,
        backgroundColor: PropTypes.string,
        color: PropTypes.string,
    }),
    selectTheme: PropTypes.func.isRequired,
    availableThemes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
