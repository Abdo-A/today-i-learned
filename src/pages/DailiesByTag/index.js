import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import DailiesList from '../../components/DailiesList';
import * as DailyActions from '../../store/actions/dailyActions';

const DailiesByTag = ({
  match,
  isAuthenticated,
  getAllDailiesByTag,
  getPublicDailiesByTag,
  allDailiesByTag,
  publicDailiesByTag
}) => {
  useEffect(() => {
    getDailiesByTag(match.params.tag_name);
  }, [isAuthenticated]);

  const getDailiesByTag = (tag) => {
    if (isAuthenticated) {
      getAllDailiesByTag(tag);
    } else {
      getPublicDailiesByTag(tag);
    }
  };

  let dailies = [];

  if (isAuthenticated) {
    dailies = allDailiesByTag;
  } else {
    dailies = publicDailiesByTag;
  }

  return <DailiesList dailies={dailies} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  allDailiesByTag: state.daily.allDailiesByTag,
  publicDailiesByTag: state.daily.publicDailiesByTag
});

const mapDispatchToProps = {
  getAllDailiesByTag: DailyActions.getAllDailiesByTag,
  getPublicDailiesByTag: DailyActions.getPublicDailiesByTag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailiesByTag);
