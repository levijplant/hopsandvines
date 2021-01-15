import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Footer,
    Hero,
    LocationHours,
    Menu,
    Navbar,
    Untappd
} from './components';

const App = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Hero />
                    <Untappd />
                </Route>
                <Route path='/locationhours' component={LocationHours} />
                <Route path='/menu' component={Menu} />
            </Switch>
            <Footer />
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);