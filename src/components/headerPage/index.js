import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Nav, NavLink, Bars, NavMenu } from './navbarElements';
import { isUserAuthenticated, setCookie } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['Home', 'Catalog', 'LoginMember', 'Register'];
  // const listMenuAdmin = ['Home', 'Manage'];
  // const listMenuMember = ['Home', 'Peminjaman', 'Pengembalian'];

  const Logout = () => {
    setCookie('userData', '', -1);
    setCookie('token', '', -1);
    window.location.replace('/');
  };

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
          {isUserAuthenticated() ? (
            <Link
              className="navbar-text"
              to="/"
              onClick={() => {
                Logout();
              }}
              key="logout"
            >
              <div className="menu">Logout</div>
            </Link>
          ) : (
            <div />
          )}
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
