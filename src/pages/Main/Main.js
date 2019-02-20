import PropTypes from 'prop-types';
import React from 'react';

import DailyBody from '../../components/DailyBody/DailyBody';
import dailySamples from '../../assets/samples/dailySamples';
import Daily from '../Daily/Daily';

const MainPublic = (props) => {
  return (
    <>
      {dailySamples.map((daily) => (
        <DailyBody daily={daily} key={daily._id} />
      ))}
    </>
  );
};

MainPublic.propTypes = {};

export default MainPublic;
