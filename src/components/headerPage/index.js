import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Nav, NavLink, Bars, NavMenu } from './navbarElement';

const Header = () => {
  const listMenu = ['Home', 'Catalog', 'Login', 'Register'];
  return (
    <>
      <Nav>
        <Bars />
        <Navbar bg="light">
          <Navbar.Brand>Hover Library</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <NavMenu>
          {listMenu.map((name) => {
            return (
              <NavLink to={`/${name}`} key={name}>
                <div>{name}</div>
              </NavLink>
            );
          })}
        </NavMenu>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Nav>
    </>
  );
};

export default Header;
