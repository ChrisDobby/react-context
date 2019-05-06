import React from "react";
import themeContext from "./context/themeContext";

const Footer = () => {
    const { selectedTheme } = React.useContext(themeContext);
    return (
        <footer className="app-footer">
            <span>{selectedTheme.name}</span>
        </footer>
    );
};

export default Footer;
