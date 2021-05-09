import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import {NavLink, Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Mcart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to='/dash' href="#features" activeClassName="active">Dashboard</NavLink>
                            <NavLink className="nav-link" to='/product' href="#features" activeClassName="active">Product</NavLink>
                            <NavLink className="nav-link" to='/user' href="#features" activeClassName="active">Users</NavLink>
                            <NavLink className="nav-link" to='/' href="#features" activeClassName="active">Customer</NavLink>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;