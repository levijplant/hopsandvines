import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import './Untappd.css';

const Untappd = () => {

    return (

        <div className='untappd-div'>
            <h2 className='rotation'>Beer Rotation</h2>
            <h4 className='visit-untappd'>We rotate our beers daily. Visit Untappd to see what's new today.</h4>
            <button className='view-untappd'>
                    View Beers on Untappd
                    <Icon 
                        name='arrow right'
                        size='large' 
                        style={{ paddingLeft: '10px'}} />
            </button>
        </div>

    )

};

export default Untappd;