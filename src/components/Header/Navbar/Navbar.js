import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../../assets/style/base';

const Navbar = (props) => {
  return (
    <nav
      className="navbar sticky-top navbar-dark "
      style={{ background: colors.main }}
    >
      <div className="navbar-brand">
        <span role="img" aria-label="book">
          📚{' '}
        </span>
        Today I Learned
      </div>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navigation"
      >
        Author
      </button>
      <div className="collapse navbar-collapse" id="navigation">
        <nav className="navbar-nav" />
        <form className="form-inline">
          <div className="form-group m-2">
            <input type="email" placeholder="Email" className="form-control" />
          </div>
          <div className="form-group m-2">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <input type="submit" value="Enter" className="btn btn-primary" />
        </form>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
