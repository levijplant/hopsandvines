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
                <Col width={8} className="menu-items-column">
                    <ul className="menu-item-list">
                        <li>Chicken Wings (6)</li>
                        <li>Chicken Tenders (4)</li>
                        <li>Mozzerella Sticks (6)</li>
                        <li>Onion Rings</li>
                        <li>Fries or Tots</li>
                        <li>Waffle Fries</li>
                        <li>Mac & Cheese Bites (10)</li>
                        <li>Mini Corndogs (12)</li>
                        <li>Jalapeño Poppers (8)</li>
                        <li>Green Beans</li>
                    </ul>
                </Col>
                <Col
                    width={4}
                    className="menu-prices-column"
                    style={{ textAlign: 'right' }}
                >
                    <ul className="menu-price-list">
                        <li>$8.00</li>
                        <li>$7.00</li>
                        <li>$7.00</li>
                        <li>$6.00</li>
                        <li>$5.00</li>
                        <li>$6.00</li>
                        <li>$7.00</li>
                        <li>$6.00</li>
                        <li>$7.00</li>
                        <li>$7.00</li>
                    </ul>
                </Col>
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