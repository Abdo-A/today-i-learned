import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import * as AuthActions from '../../store/actions/authActions';
import Jumbotron from './Jumbotron/Jumbotron';
import Navbar from './Navbar/Navbar';

const Header = ({ checkSavedUserThenLogin }) => {
  useEffect(() => {
    checkSavedUserThenLogin();
  }, []);

  return (
    <>
      <Jumbotron />
      <Navbar />
    </>
  );
};

const mapDispatchToProps = {
  checkSavedUserThenLogin: AuthActions.checkSavedUserThenLogin
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
