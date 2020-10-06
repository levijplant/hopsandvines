import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.min.css'

import { Hero } from './components';

const App = () => {

    return (

        <>
            <h1>Welcome to Hops & Vines</h1>
            <Hero>
            </Hero>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);