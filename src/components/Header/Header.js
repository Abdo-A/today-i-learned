import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';

import { colors } from '../../assets/style/base';
import * as AuthActions from '../../store/actions/authActions';
import Jumbotron from './Jumbotron/Jumbotron';
import Navbar from './Navbar/Navbar';

const Header = ({ checkSavedUserThenLogin, isLoading }) => {
  useEffect(() => {
    checkSavedUserThenLogin();
  }, []);

  return (
    <>
      <Jumbotron />
      <Navbar />

      {isLoading &&
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <ReactLoading type="spin" color={colors.main} height={80} width={80} />
        </div>
      }

    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading || state.daily.isLoading
})

const mapDispatchToProps = {
  checkSavedUserThenLogin: AuthActions.checkSavedUserThenLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
