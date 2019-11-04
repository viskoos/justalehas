import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class TopMenu extends Component {
    render() {
        return (
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="/">Just a Lёha</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                            <LinkContainer to="/description">
                                <Nav.Link>Description</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/buy">
                                <Nav.Link>Buy</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contacts">
                                <Nav.Link>Contacts</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default TopMenu;

{/*<Nav.Link href="/description">Description</Nav.Link>*/}