import React from 'react';
import './Navigation.css';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const navigation = (props) => {
    return (
        <Col md={12} >
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to={'/'} exact>ProductList</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={'/'} exact>
                            <NavItem eventKey={1}>
                                Owner Actions
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/ProductList'}>
                            <NavItem eventKey={2}>
                                Account Actions
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Col>
    )
}

export default navigation;