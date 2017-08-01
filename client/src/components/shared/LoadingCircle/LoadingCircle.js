import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('LoadingCircle', {
  loadingContainer: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
  },
  loading: {
    margin: 'auto',
  },
});

function LoadingCircle(props) {
  const classes = props.classes;

  return (
    <div className={classes.loadingContainer}>
      <CircularProgress className={classes.loading} size={50} />
    </div>
  );
}

LoadingCircle.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(LoadingCircle);