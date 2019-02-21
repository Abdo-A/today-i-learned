import PropTypes from 'prop-types';
import React from 'react';

import DailyBody from '../../components/DailyBody/DailyBody';
import dailySamples from '../../assets/samples/dailySamples';
import Modal from '../../components/Modal/Modal';

const Daily = (props) => {
  const onDeleteDaily = () => {
    console.log('delete daily');
  };

  const onDeleteComment = () => {
    console.log('delete comment');
  };

  const daily = dailySamples[0];

  return (
    <div className="mb-5">
      <DailyBody daily={daily} />
      <div className="container">
        <div className="text-right">
          <Modal
            body="Are you sure you want to delete this daily?"
            trigger={<button className="btn btn-danger btn-sm">Delete</button>}
            onConfirm={onDeleteDaily}
            modalId="deleteDailyModal"
          />
        </div>

        {daily.comments.map((comment) => (
          <div
            className="alert mt-5"
            role="alert"
            style={{ backgroundColor: '#616161' }}
            key={comment._id}
          >
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <h4 className="alert-heading text-light">{comment.email}</h4>
              <div className="d-flex text-light">
                <small className="mr-3">{daily.date.toDateString()}</small>
                <small>
                  {daily.date.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                  })}
                </small>
              </div>
            </div>
            <hr />
            <p className="text-light lead">{comment.body}</p>
            <div className="text-right" style={{ cursor: 'pointer' }}>
              <Modal
                body="Are you sure you want to delete this comment?"
                trigger={'❌'}
                onConfirm={onDeleteComment}
                modalId="deleteDailyCommentModal"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Daily.propTypes = {};

export default Daily;
