import { connect } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import React, { useState, useEffect } from 'react';

import * as DailyActions from '../../store/actions/dailyActions';
import DailyBody from '../../components/DailyBody/DailyBody';
import Modal from '../../components/Modal/Modal';

const Daily = (props) => {
  const [comment, setComment] = useState({
    email: '',
    body: ''
  });

  useEffect(() => {
    const { getDailyById, match } = props;
    getDailyById(match.params.daily_id);
  }, []);

  const onDeleteDaily = () => {
    const { deleteDaily, history, match } = props;

    const callback = () => {
      history.push('/');
    };

    deleteDaily(match.params.daily_id, callback);
  };

  const onDeleteComment = (commentId) => {
    const { deleteCommentFromDaily, getDailyById, match } = props;

    const callback = () => {
      getDailyById(match.params.daily_id);
    };

    deleteCommentFromDaily(commentId, match.params.daily_id, callback);
  };

  const onAddComment = () => {
    const { addCommentToDaily, getDailyById, match } = props;

    const callback = () => {
      getDailyById(match.params.daily_id);
      setComment({ email: '', body: '' });
    };

    addCommentToDaily(match.params.daily_id, comment, callback);
  };

  const onStar = () => {
    const { starDaily, match } = props;

    starDaily(match.params.daily_id);
  };

  const daily = props.selectedDaily;

  if (Object.keys(props.selectedDaily).length === 0) {
    return null;
  }

  const getEmailView = (email) => {
    const { isAuthenticated } = props;

    let emailView = email;
    if (email.includes('@')) {
      if (!isAuthenticated) {
        const signIndex = email.indexOf('@');
        emailView = email.slice(0, signIndex);
      }
    }
    return emailView;
  };

  const { isAuthenticated } = props;

  return (
    <div className="mb-5">
      <DailyBody daily={daily} onStarDaily={onStar} />
      <div className="container">
        <div className="jumbotron mt-4 p-3">
          <div className="h4 lead mb-4">Add a Comment</div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) =>
                setComment({ ...comment, email: e.target.value })
              }
              value={comment.email}
            />
          </div>
          <div className="form-group">
            <textarea
              id="textarea"
              rows="4"
              className="form-control"
              placeholder="Text"
              onChange={(e) => setComment({ ...comment, body: e.target.value })}
              value={comment.body}
            />
          </div>
          <div className="text-right">
            <button
              className="btn btn-success"
              disabled={!comment.body || !isEmail(comment.email)}
              onClick={onAddComment}
            >
              Add
            </button>
          </div>
        </div>

        {daily.comments.map((comment) => {
          comment.date = new Date(comment.date);
          return (
            <div
              className="alert alert-info mt-5"
              role="alert"
              key={comment._id}
            >
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <h4 className="alert-heading text-dark">
                  {getEmailView(comment.email)}
                </h4>
                <div className="d-flex text-dark">
                  <small className="mr-3">{comment.date.toDateString()}</small>
                  <small>
                    {comment.date.toLocaleString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true
                    })}
                  </small>
                </div>
              </div>
              <hr />
              <p className="text-dark lead" style={{ whiteSpace: 'pre-line' }}>
                {comment.body}
              </p>
              {isAuthenticated && (
                <div className="text-right" style={{ cursor: 'pointer' }}>
                  <Modal
                    body="Are you sure you want to delete this comment?"
                    trigger={'❌'}
                    onConfirm={() => onDeleteComment(comment._id)}
                    modalId={`deleteDailyCommentModal${comment._id}`}
                  />
                </div>
              )}
            </div>
          );
        })}

        {isAuthenticated && (
          <div className="text-right">
            <Modal
              body="Are you sure you want to delete this daily?"
              trigger={
                <button className="btn btn-danger btn-sm">Delete Daily</button>
              }
              onConfirm={onDeleteDaily}
              modalId="deleteDailyModal"
            />
          </div>
        )}
      </div>
    </div>
  );
};

Daily.propTypes = {};

const mapStateToProps = (state) => ({
  selectedDaily: state.daily.selectedDaily,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  getDailyById: DailyActions.getDailyById,
  deleteDaily: DailyActions.deleteDaily,

  addCommentToDaily: DailyActions.addCommentToDaily,
  deleteCommentFromDaily: DailyActions.deleteCommentFromDaily,
  starDaily: DailyActions.starDaily
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Daily);
