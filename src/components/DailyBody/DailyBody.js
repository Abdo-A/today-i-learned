import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CreatableSelect from 'react-select/lib/Creatable';

const DailyBody = ({ daily, history }) => {
  const onClickStar = () => {
    console.log('star');
  };

  const onClickUnstar = () => {
    console.log('unstar');
  };

  const onClickComment = () => {
    console.log('comment');
  };

  return (
    <div className="jumbotron bg-light text-dark rounded-0 mb-0 pb-0">
      <div className="container">
        <div className="mb-4 d-flex flex-row justify-content-between">
          <div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/daily/daily.date')}
            >
              <h1 className="d-none d-md-block font-weight-bold text-left">
                {daily.date.toDateString()}
              </h1>
              <h4 className="d-md-none font-weight-bold text-center text-center">
                {daily.date.toDateString()}
              </h4>
            </div>
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

        <div className="h6 d-flex justify-content-around justify-content-sm-start">
          <span
            className="mr-sm-4"
            style={{ cursor: 'pointer' }}
            title="Star this Daily"
            onClick={onClickStar}
          >
            {'☀️ '}
            Star {daily.stars > 0 ? `(${daily.stars})` : ''}
          </span>

          <span
            className="mr-sm-4"
            style={{ cursor: 'pointer' }}
            title="Unstar this Daily"
            onClick={onClickUnstar}
          >
            {'⛅ '}
            Unstar
          </span>

          <span
            className="mr-sm-4"
            style={{ cursor: 'pointer' }}
            title="Comment on this daily"
            onClick={onClickComment}
          >
            {'📋 '}
            Comment
          </span>
        </div>

        <div className="mt-4 mb-4">
          <CreatableSelect
            isClearable
            isMulti
            isDisabled
            noOptionsMessage={() => 'No more tags'}
            placeholder="Select tags"
            defaultValue={daily.tags.map((tag) => ({ label: tag, value: tag }))}
          />
        </div>
      </div>
    </div>
  );
};

DailyBody.propTypes = { daily: PropTypes.shape({}) };

export default withRouter(DailyBody);
