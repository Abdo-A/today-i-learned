import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const DailyBody = ({ daily, history, onStarDaily }) => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    setStars(daily.stars);
  }, [daily]);

  const onClickComment = () => {
    history.push(`/daily/${daily._id}`);
  };

  const onClickTag = (tag) => {
    history.push(`/tag/${tag}`);
  };

  const onClickStar = () => {
    setStars(stars + 1);
    onStarDaily();
  };

  if (typeof daily.date == 'string') {
    daily.date = new Date(daily.date);
  }

  return (
    <div className="jumbotron bg-light text-dark rounded-0">
      <div className="container">
        <div className="mb-4 d-flex flex-row justify-content-between">
          <div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => history.push(`/daily/${daily._id}`)}
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
        <p className="lead" style={{ whiteSpace: 'pre-line' }}>
          {daily.body}
        </p>

        {daily.imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt="Daily"
            className="rounded img-thumbnail mx-auto d-block w-75 mt-4 mb-4"
          />
        ))}

        <div className="btn-group btn-group-toggle mb-3" data-toggle="buttons">
          {daily.tags.map((tag) => (
            <label
              className="btn btn-secondary active"
              style={{ cursor: 'pointer' }}
              key={tag}
              onClick={() => onClickTag(tag)}
            >
              <input type="radio" name={tag} id={tag} /> {tag}
            </label>
          ))}
        </div>

        <div className="h6 d-flex justify-content-around justify-content-sm-start">
          <span
            className="mr-sm-4"
            style={{ cursor: 'pointer' }}
            title="Star this Daily"
            onClick={onClickStar}
          >
            {'☀️ '}
            Star {stars > 0 ? `(${stars})` : ''}
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
      </div>
    </div>
  );
};

DailyBody.propTypes = { daily: PropTypes.shape({}) };

export default withRouter(DailyBody);
