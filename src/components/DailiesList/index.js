import { connect } from 'react-redux';
import React from 'react';

import * as DailyActions from '../../store/actions/dailyActions';
import DailyBody from '../../components/DailyBody/DailyBody';

const DailiesList = ({ starDaily, dailies }) => {
  const onStar = (dailyId) => {
    starDaily(dailyId);
  };

  if (dailies.length === 0) {
    return <p className="display-4 text-center mt-5">No Dailies Yet</p>;
  }

  return (
    <div className="mb-5 pb-5">
      {dailies.map((daily) => (
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

DailiesList.propTypes = {};

const mapDispatchToProps = {
  starDaily: DailyActions.starDaily
};

export default connect(
  null,
  mapDispatchToProps
)(DailiesList);
