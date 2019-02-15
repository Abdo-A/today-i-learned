import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron m-0 text-light" style={styles.container}>
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
    backgroundSize: 'cover',
    borderRadius: 0
  },
  heading: {
    background: 'rgba(37, 45, 62, 0.59)'
  }
};

Jumbotron.propTypes = {};

export default Jumbotron;
