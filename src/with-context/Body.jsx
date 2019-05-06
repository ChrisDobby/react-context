import React from "react";
import Logo from "../Logo";
import themeContext from "./context/themeContext";

const Body = () => {
    const { selectedTheme } = React.useContext(themeContext);

    return (
        <div className="app-body">
            <Logo logoBackground={selectedTheme.logoBackground} />
        </div>
    );
};

export default Body;
