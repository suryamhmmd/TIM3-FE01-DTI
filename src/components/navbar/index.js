import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';

const Navbar = () => {
  const listMenu = ['home', 'login', 'register', 'inputBook'];
  return (
    <div className="navbar">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {isUserAuthenticated() ? <span>logout</span> : <div />}
    </div>
  );
};
export default Navbar;
