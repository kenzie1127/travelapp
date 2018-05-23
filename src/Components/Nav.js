import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Navigation extends React.Component {

    render(){
        return(

        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
            <a href="#brand">Find your next vacation</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
             <NavItem eventKey={2} href='#'>
                Weather
             </NavItem>
       
            <NavItem eventKey={2} href="/actions">
                Itinerary
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={2} href="#">
                Sign up
            </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        );
    }
}
export default Navigation;