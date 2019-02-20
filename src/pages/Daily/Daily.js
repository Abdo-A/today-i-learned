import PropTypes from 'prop-types';
import React from 'react';

import DailyBody from '../../components/DailyBody/DailyBody';
import dailySamples from '../../assets/samples/dailySamples';

const Daily = (props) => {
  return (
    <div className="mb-5 pb-5">
      <DailyBody daily={dailySamples[0]} />
    </div>
  );
};

Daily.propTypes = {};

export default Daily;
