import PropTypes from 'prop-types';
import React from 'react';

import DailyBody from '../../components/DailyBody/DailyBody';
import dailySamples from '../../assets/samples/dailySamples';

const Daily = (props) => {
  const onClickDelete = () => {
    const chooseDelete = window.confirm(
      'Are you sure you want to delete this daily?'
    );
    if (chooseDelete) {
      console.log('deleted');
    }
  };

  return (
    <div className="mb-5">
      <DailyBody daily={dailySamples[0]} />
      <div className="container text-right">
        <button className="btn btn-danger btn-sm" onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

Daily.propTypes = {};

export default Daily;
