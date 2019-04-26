import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import * as DailyActions from '../../store/actions/dailyActions';
import DailyBody from '../../components/DailyBody/DailyBody';

const MainPublic = (props) => {
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

  const onStar = (dailyId) => {
    const { starDaily } = props;

    starDaily(dailyId);
  };

  let shownDailies = [];

  if (props.isAuthenticated) {
    shownDailies = props.allDailies;
  } else {
    shownDailies = props.publicDailies;
  }

  if (shownDailies.length === 0) {
    return <p className="display-4 text-center mt-5">No Dailies Yet</p>;
  }

  return (
    <div className="mb-5 pb-5">
      {shownDailies.map((daily) => (
        <DailyBody
          daily={daily}
          key={daily._id}
          onStarDaily={() => {
            onStar(daily._id);
          }}
        />
      ))}
    </div>
  );
};

MainPublic.propTypes = {};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  allDailies: state.daily.allDailies,
  publicDailies: state.daily.publicDailies
});

const mapDispatchToProps = {
  getAllDailies: DailyActions.getAllDailies,
  getPublicDailies: DailyActions.getPublicDailies,

  starDaily: DailyActions.starDaily
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPublic);
