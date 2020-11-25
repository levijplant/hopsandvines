import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.min.css'

import {
    Navbar,
    Hero,
    Untappd,
    Footer
} from './components';

const App = () => {

    return (

        <>
            <Navbar />
            <Hero />
            <Untappd />
            <Footer />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);