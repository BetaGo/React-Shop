import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

function Notice(props) {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={props.open}
        onRequestClose={props.hideNotice}
        message={props.message}
      />
    </div>
  );
}

Notice.propTypes = {
  message: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  hideNotice: PropTypes.func.isRequired,
};

export default Notice;
