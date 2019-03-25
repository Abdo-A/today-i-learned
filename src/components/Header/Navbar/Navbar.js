import React, { useState } from 'react';
import { colors } from '../../../assets/style/base';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from '../../../store/actions/authActions';

const Navbar = ({ history, isAuthenticated, loginUser, logoutUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const AuthorLoginForm = (
    <>
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
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Enter"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              loginUser({ email, password });
            }}
          />
        </form>
      </div>
    </>
  );

  const AuthenticatedView = (
    <button className="btn btn-primary" onClick={() => logoutUser()}>
      Logout
    </button>
  );

  return (
    <nav
      className="navbar sticky-top navbar-dark "
      style={{ background: colors.main }}
    >
      <div
        className="navbar-brand"
        onClick={() => history.push('/')}
        style={{ cursor: 'pointer' }}
      >
        <span role="img" aria-label="book">
          📚{' '}
        </span>
        Today I Learned
      </div>
      {isAuthenticated ? AuthenticatedView : AuthorLoginForm}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  loginUser: AuthActions.loginUser,
  logoutUser: AuthActions.logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
