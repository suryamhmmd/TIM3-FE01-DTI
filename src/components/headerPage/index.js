import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, setCookie } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['Home', 'Keranjang', 'Peminjaman', 'Pengembalian'];
  const Logout = () => {
    setCookie('userData', '', -1);
    setCookie('token', '', -1);
    window.location.replace('/');
  };

  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="/" className="navbar-brand">
            HoverLibrary
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#headerNavbar"
            aria-controls="headerNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="headerNavbar">
            <ul className="navbar-nav mr-auto">
              {listMenu.map((name) => {
                return (
                  <li className="nav-item" key={name}>
                    <Link className="nav-link" to={`/${name}`}>
                      <div className="menu">{name}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
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
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
