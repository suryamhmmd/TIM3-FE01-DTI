import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div id="sidebar" className="sidebar">
      <a
        className="d-flex flex-row justify-content-center align-items-center text-decoration-none mt-3 sidebar-logo"
        href="/"
      >
        <h3 className="ml-3 mb-0 text-white">HoverLibrary</h3>
      </a>
      <hr style={{ borderColor: 'white' }} />
      <div className="d-flex flex-row justify-content-center align-items-center sidebar-item">
        <div className="d-flex flex-column">
          <p className="ml-3 mb-0 text-white">Names</p>
          <p className="ml-3 mb-0 text-white font-italic">Online</p>
        </div>
      </div>
      <hr style={{ borderColor: 'white' }} />
      <Link className="text-decoration-none sidebar-item" to="/admin/dashboard">
        <i className="fa fa-fw fa-home" />
        {' '}
        Dashboard Admin
      </Link>
      <Link
        className="text-decoration-none sidebar-item"
        to="/admin/manageProduct"
      >
        <i className="fa fa-fw fas fa-tags" />
        {' '}
        Manage Book
      </Link>
      <Link
        className="text-decoration-none sidebar-item"
        to="/admin/manageTransaction"
      >
        <i className="fa-fw fas fa-dollar-sign" />
        {' '}
        Manage Rak
      </Link>
      <Link
        className="text-decoration-none sidebar-item"
        to="/admin/manageUser"
      >
        <i className="fa fa-fw fa-user" />
        {' '}
        Manage Member
      </Link>
      <Link
        className="text-decoration-none sidebar-item"
        to="/admin/manageUser"
      >
        <i className="fa fa-fw fa-user" />
        {' '}
        Manage Pustakawan
      </Link>
      <hr style={{ borderColor: 'white' }} />
      <p className="sidebar-item" style={{ cursor: 'pointer' }}>
        <i className="fas fa-sign-out-alt" />
        {' '}
        Logout
      </p>
    </div>
  );
};

export default AdminPage;
