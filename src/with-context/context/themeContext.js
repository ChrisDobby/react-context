import React from "react";

export default React.createContext({
    selectedTheme: {},
    availableThemes: [],
    selectTheme: theme => {},
});
