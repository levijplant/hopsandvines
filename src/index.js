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
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route exact path='/'>
                        <Hero />
                        <Untappd />
                    </Route>
                    <Route path='/locationhours' component={LocationHours} />
                    <Route path='/menu' component={Menu} />
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
);