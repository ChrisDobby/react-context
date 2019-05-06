import React from "react";
import contextTheme from "./context/themeContext";
import ThemeItem from "./ThemeItem";

const Header = () => {
    const { selectedTheme, availableThemes } = React.useContext(contextTheme);
    return (
        <header
            className="app-header"
            style={{ backgroundColor: selectedTheme.backgroundColor, color: selectedTheme.color }}
        >
            <span>{`Current theme: ${selectedTheme.name}`}</span>
            <div className="app-menu">
                {availableThemes.map(theme => (
                    <ThemeItem key={theme} themeName={theme.name} />
                ))}
            </div>
        </header>
    );
};

export default Header;
