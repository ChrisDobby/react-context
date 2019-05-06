import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import themeContext from "./context/themeContext";

const App = () => {
    const { selectedTheme } = React.useContext(themeContext);
    return (
        <div className="app" style={{ backgroundColor: selectedTheme.backgroundColor, color: selectedTheme.color }}>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
