import PropTypes from 'prop-types';
import React from 'react';
import Daily from '../../components/Daily/Daily';
import dailySamples from '../../assets/samples/dailySamples';

const MainPublic = (props) => {
  return (
    <>
      {dailySamples.map((daily) => (
        <Daily daily={daily} key={daily._id} />
      ))}
    </>
  );
};

MainPublic.propTypes = {};

export default MainPublic;
