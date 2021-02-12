import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
    return (
        <Container className="main-menu-container">
            <Row>
                <Col className="main-menu-grid">
                    <h1 className="menu-header">Menu</h1>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col width={6} className="menu-items-column" >
                    <ul className="menu-item-list">
                        <li>Chicken Wings</li>
                        <li>Chicken Tenders</li>
                        <li>Mozzerella Sticks</li>
                        <li>Onion Rings</li>
                        <li>French Fries</li>
                        <li>Tater Tots</li>
                        <li>Chips & Salsa</li>
                    </ul>
                </Col>
                <Col
                    width={6}
                    className="menu-prices-column"
                    style={{ textAlign: 'right' }}
                >
                    <ul className="menu-price-list">
                        <li>$7.00</li>
                        <li>$6.00</li>
                        <li>$7.00</li>
                        <li>$6.00</li>
                        <li>$4.00</li>
                        <li>$4.00</li>
                        <li>$6.00</li>
                    </ul>
                </Col>
                <Col></Col>
            </Row>
            <Row
                className="sauces"
                style={{
                    justifyContent: "center",
                    fontSize: "24px",
                }}
            >
                <p>
                    Sauces: Ketchup, Ranch, BBQ, Fry, Buffalo, Honey Mustard, Hot, Honey
                    Garlic
                </p>
            </Row>
            <Row style={{ justifyContent: "center" }}>
                <div className="logo">
                    <img
                        className="hop-image"
                        src={require("./images/hop.jpg")}
                        alt="Hops and Vines Logo"
                    />
                </div>
            </Row>
        </Container>
    );
};

export default Menu;
