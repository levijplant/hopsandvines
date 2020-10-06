import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.min.css'

import { Hero } from './components';

const App = () => {

    return (

        <>
            <Hero/>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);