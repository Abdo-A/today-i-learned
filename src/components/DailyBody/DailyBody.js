import React from 'react';
import PropTypes from 'prop-types';

const DailyBody = ({ daily }) => {
  return (
    <div className="jumbotron bg-light text-dark rounded-0 mb-0 pb-0">
      <div className="container">
        <div className="mb-4 d-flex flex-row justify-content-between">
          <div>
            <h1 className="d-none d-md-block font-weight-bold text-left">
              {daily.date.toDateString()}
            </h1>
            <h4 className="d-md-none font-weight-bold text-center text-center">
              {daily.date.toDateString()}
            </h4>
            <small className="lead font-weight-bold">
              {daily.date.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}
            </small>
          </div>
          <h1 className="display-4">{daily.private ? '🕶' : '👐'}</h1>
        </div>
        <p className="lead">{daily.body}</p>
      </div>
    </div>
  );
};

DailyBody.propTypes = { daily: PropTypes.shape({}) };

export default DailyBody;
