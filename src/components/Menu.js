import React from 'react';
import { Container, Grid } from 'semantic-ui-react'
import './Menu.css';

const Menu = () => {

    return (
        <Container className='main-menu-container'>
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column className='main-menu-grid'>
                        <h1 className='menu-header'>Menu</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column></Grid.Column>
                    <Grid.Column
                        width={6}
                        className='menu-items-column'
                        textAlign='left'>
                        <ul className='menu-item-list'>
                            <li>Chicken Wings</li>
                            <li>Chicken Tenders</li>
                            <li>Mozzerella Sticks</li>
                            <li>Onion Rings</li>
                            <li>French Fries</li>
                            <li>Tater Tots</li>
                            <li>Chips & Salsa</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column
                        width={6}
                        className='menu-prices-column'
                        textAlign='right'>
                        <ul className='menu-price-list'>
                            <li>$7.00</li>
                            <li>$6.00</li>
                            <li>$7.00</li>
                            <li>$6.00</li>
                            <li>$4.00</li>
                            <li>$4.00</li>
                            <li>$6.00</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid.Row>
                <Grid.Row
                    className='sauces'
                    style={{
                        justifyContent: 'center',
                        fontSize: '24px'
                    }} >
                    <p>
                        Sauces: Ketchup, Ranch, BBQ, Fry, Buffalo, Honey Mustard, Hot, Honey Garlic
                    </p>
                </Grid.Row>
                <Grid.Row style={{justifyContent: 'center'}}>
                    <div className='logo'>
                        <img
                            className='hop-image'
                            src={require('./images/hop.jpg')}
                            alt='Hops and Vines Logo' />
                    </div>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Menu;