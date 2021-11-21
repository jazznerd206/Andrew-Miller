import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Theme, { theme } from './styled/theme.style.jsx';
import { GlobalStyle } from "./styled/global.style.jsx";
import App from "./App.jsx";

ReactDOM.render(
    <Router>
        <Theme theme={theme}>
            <GlobalStyle />
            <App />
        </Theme>
    </Router>,
    document.getElementById('root')
);