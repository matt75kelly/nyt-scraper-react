import Navbar, {Header, Brand, Toggle, Collapse} from 'react-bootstrap/lib/Navbar';
import {Nav, NavItem} from 'react-bootstrap'
import React from 'react';

const NavBar = (props) => {
     return(
     <Navbar inverse collapseOnSelect>
          <Header>
               <Brand>
                    <a href="#brand">React-NYT-Scraper</a>
               </Brand>
               <Toggle />
          </Header>
          <Collapse>
               <Nav>
                    <NavItem eventKey={1} href={props.NavRoute1}>
                    Home
                    </NavItem>
                    <NavItem eventKey={2} href={props.NavRoute2}>
                    Saved Articles
                    </NavItem>
               </Nav>
               <Nav pullRight>
                    <NavItem eventKey={1} href="#"
                         className="scrape">
                    Pull New Articles
                    </NavItem>
                    <NavItem eventKey={1} href="#"
                         className="delSaved">
                    Delete Pulled Articles
                    </NavItem>
               </Nav>
          </Collapse>
     </Navbar>
     )}

export default NavBar;