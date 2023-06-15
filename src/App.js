import React from "react";
import Index from "pages/index";
import Blog from "pages/whitepaper";
import Blog1 from "pages/blog";
import Contact from "pages/contact";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/blog' component={Blog}/>
			<Route exact path='/blog1' component={Blog1}/>
			<Route exact path='/contact' component={Contact}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
