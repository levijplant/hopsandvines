import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import 'semantic-ui-css/semantic.min.css'

import {
    Navbar,
    Hero,
    Untappd,
    Footer,
    LocationHours
} from './components';

const App = () => {

    return (

        <Router>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route path='/locationhours'>
                        <LocationHours />
                    </Route>
                    <Route path='/'>
                        <Hero />
                        <Untappd />
                    </Route>
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);