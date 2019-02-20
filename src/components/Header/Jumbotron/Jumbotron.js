import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

let x;

console.log('hi');

const Jumbotron = ({ history }) => {
  return (
    <div
      className="jumbotron m-0 text-light rounded-0 d-flex justify-content-between align-items-center"
      style={styles.container}
    >
      <div>
        <h1 className="display-2 d-none d-md-inline" style={styles.heading}>
          I love you, Abdo
        </h1>
        <h2 className="d-inline d-md-none" style={styles.heading}>
          I love you, Abdo
        </h2>
      </div>
      <div>
        <h4 onClick={() => history.push('/new')} style={{ cursor: 'pointer' }}>
          {'✍️'}
        </h4>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('https://source.unsplash.com/700x300/?happy')",
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  heading: {
    background: 'rgba(37, 45, 62, 0.59)'
  }
};

Jumbotron.propTypes = {};

export default withRouter(Jumbotron);
