import PropTypes from 'prop-types';
import React from 'react';

let x;

console.log('hi');

const Jumbotron = (props) => {
  return (
    <div
      className="jumbotron m-0 text-light rounded-0"
      style={styles.container}
    >
      <h1 className="display-2 d-none d-md-inline" style={styles.heading}>
        I love you, Abdo
      </h1>
      <h1 className="d-inline d-md-none" style={styles.heading}>
        I love you, Abdo
      </h1>
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

export default Jumbotron;
