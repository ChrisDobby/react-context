import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./with-context/App";
// import App from "./no-context/App";
import ThemeProvider from "./with-context/context/themeProvider";

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById("root"),
);
