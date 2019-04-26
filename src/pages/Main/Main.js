import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import * as DailyActions from '../../store/actions/dailyActions';
import DailiesList from '../../components/DailiesList';

const MainPage = (props) => {
  useEffect(() => {
    getDailies();
  }, [props.isAuthenticated]);

  const getDailies = () => {
    const { getAllDailies, getPublicDailies } = props;

    if (props.isAuthenticated) {
      getAllDailies();
    } else {
      getPublicDailies();
    }
  };

  let dailies = [];

  if (props.isAuthenticated) {
    dailies = props.allDailies;
  } else {
    dailies = props.publicDailies;
  }

  return <DailiesList dailies={dailies} />;
};

MainPage.propTypes = {};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  allDailies: state.daily.allDailies,
  publicDailies: state.daily.publicDailies
});

const mapDispatchToProps = {
  getAllDailies: DailyActions.getAllDailies,
  getPublicDailies: DailyActions.getPublicDailies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
