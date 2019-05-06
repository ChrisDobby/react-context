import React from "react";
import PropTypes from "prop-types";
import themeContext from "./themeContext";

const darkTheme = {
    name: "dark",
    backgroundColor: "#282c34",
    color: "white",
    linkColor: "#61dafb",
    logoBackground: "white",
};

const lightTheme = {
    name: "light",
    backgroundColor: "white",
    color: "#282c34",
    linkColor: "#61dafb",
    logoBackground: "red",
};

const availableThemes = [darkTheme, lightTheme];

const ThemeProvider = props => {
    const [selectedTheme, setSelectedTheme] = React.useState(darkTheme);
    const selectTheme = name => {
        const theme = availableThemes.find(theme => theme.name === name);
        if (theme) {
            setSelectedTheme(theme);
        }
    };

    return (
        <themeContext.Provider value={{ selectedTheme, selectTheme, availableThemes }}>
            {props.children}
        </themeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export default ThemeProvider;
