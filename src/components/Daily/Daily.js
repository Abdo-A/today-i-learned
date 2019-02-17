import React from 'react';
import PropTypes from 'prop-types';

const Daily = ({ daily }) => {
  return (
    <div className="jumbotron bg-light text-dark rounded-0">
      <div className="container">
        <div className="mb-4">
          <h1 className="d-none d-md-block font-weight-bold text-left">
            {daily.date.toDateString()}
          </h1>
          <h3 className="d-md-none font-weight-bold text-center text-center">
            {daily.date.toDateString()}
          </h3>
          <small className="lead font-weight-bold">
            {daily.date.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true
            })}
          </small>
        </div>
        <p className="lead">{daily.body}</p>
      </div>
    </div>
  );
};

Daily.propTypes = {};

export default Daily;
